/*
invoke with
AWS_PROFILE=cv S3_TRAINING_BUCKET=custom-labels-console-us-east-1-67a9361d65 node index.js
S3 bucket should be generated by Rekogition, e.g. custom-labels-console-us-east-1-67a9361d65
*/
const chromium = require('chrome-aws-lambda')
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const S3_TRAINING_BUCKET = process.env.S3_TRAINING_BUCKET

const URL_GAUGE_BUILDER_PREFIX = 'https://aws-computer-vision.jacobcantwell.com/gauge/?view=training&g='
const S3_IMAGE_FOLDER = 'gauge-pressure'
const zeroPad = (num, places) => String(num).padStart(places, '0')
let manifestLabels = []
let imageList = []
let labelList = []
let manifestFile

function getManifestLabelJson(s3Key, bp) {
  console.log('getManifestLabelJson')
  const s3Url = 's3://' + S3_TRAINING_BUCKET + '/' + s3Key
  const creationDate = new Date().toISOString()
  const label = 'PRESSURE_' + Math.ceil(Number(bp) / 10) * 10
  console.log('label2', label)
  let manifestLabelJson = {
    'source-ref': s3Url,
    'gauge-pressure': 0, // FIRST label
    'gauge-pressure-metadata': {
        'class-name': 'GAUGE_PRESSURE',
        'confidence': 1,
        'type': 'groundtruth/image-classification',
        'job-name': 'identify-gauge-pressure-v01',
        'human-annotated': 'yes',
        'creation-date': creationDate
    },
    ['gauge-pressure-' + bp]: 1, // SECOND label
    ['gauge-pressure-' + bp + '-metadata']: {
        'class-name': label,
        'confidence': 1,
        'type': 'groundtruth/image-classification',
        'job-name': 'identify-gauge-pressure-v01',
        'human-annotated': 'yes',
        'creation-date': creationDate
    }
  }
  manifestLabelJson = JSON.stringify(manifestLabelJson, null, null)
  // console.log('manifestLabelJson', manifestLabelJson)
  labelList.push('GAUGE_PRESSURE')
  labelList.push(label)
  manifestLabels.push(manifestLabelJson)
  return manifestLabelJson
}

async function getBoundingBoxManifestLabelJson(page, s3Key, bp) {
    console.log('getBoundingBoxManifestLabelJson')
    const oil_well = await page.$('#oil-well')
    const oil_well_box = await oil_well.boundingBox()
    const s3Url = 's3://' + S3_TRAINING_BUCKET + '/' + s3Key
    const creationDate = new Date().toISOString()
    let annotationsArray = []
    let confidenceArray = []
    let classmap = {}

    const gauges = await page.$$('#oil-well .gauge')
    for (const myGauge of gauges.entries()) {
      const i = myGauge[0]
      const gauge_box = await myGauge[1].boundingBox()
      const labelNumber = Math.round((Number(bp)+i) / 10) * 10
      const label = 'PRESSURE_' + labelNumber
      console.log('label1', bp, i, (Number(bp)+i), labelNumber)
      annotationsArray.push({
        'class_id': i,
        'top': gauge_box.y,
        'left': gauge_box.x,
        'width': Math.min(gauge_box.width, oil_well_box.width),
        'height': Math.min(gauge_box.height, oil_well_box.height)
      })
      confidenceArray.push({ 'confidence': 1 })
      classmap[i] = label
      labelList.push(label)
    }
    let manifestLabelJson = {
      'source-ref': s3Url,
      'bounding-box': {
        'image_size': [{
          'width': Math.min(oil_well_box.width, page.viewport().width),
          'height': Math.min(oil_well_box.height, page.viewport().height),
          'depth': 3
        }],
        'annotations': annotationsArray
      },
      'bounding-box-metadata': {
        'objects': confidenceArray,
        'class-map': classmap,
        'type': 'groundtruth/object-detection',
        'human-annotated': 'yes',
        'creation-date': creationDate,
        'job-name': 'identify-gauges'
      }
    }
    manifestLabelJson = JSON.stringify(manifestLabelJson, null, null)
    // console.log('manifestLabelJson', manifestLabelJson)
    manifestLabels.push(manifestLabelJson)
    return manifestLabelJson
}

async function scrapeImageAndSaveS3(page, s3Key, elementId, clipX = 0, clipY = 0) {
  console.log('scrapeImageAndSaveS3', s3Key, elementId, clipX, clipY)
  const pageElement = await page.$(elementId)
  const pageElementBox = await pageElement.boundingBox()
  const screenshotParams = {
    path: s3Key, // uncomment if only running locally - need to create a directory for each bp
    clip: {
      x: pageElementBox.x + clipX,
      y: pageElementBox.y + clipY,
      width: Math.min(pageElementBox.width - (2 * clipX), page.viewport().width - (2 * clipX)),
      height: Math.min(pageElementBox.height - (2 * clipY), page.viewport().height - (2 * clipY)),
    }
  }
  console.log('screenshotParams', screenshotParams)
  const screenshot = await page.screenshot(screenshotParams)
  // save image to S3
  const s3Params = {
    Bucket: S3_TRAINING_BUCKET,
    Key: s3Key,
    Body: screenshot
  };
  // await s3.putObject(s3Params).promise()
  const imageLocation = 's3://' + S3_TRAINING_BUCKET + '/' + s3Key
  console.log('imageLocation', imageLocation)
  imageList.push(imageLocation)
  return imageLocation
}

async function generateSingleGaugeImage(page, bp, transformSuffix) {
  const s3Key = S3_IMAGE_FOLDER + '/single-gauges-bp' + bp + transformSuffix + '.jpg'
  console.log('generating', s3Key)
  await scrapeImageAndSaveS3(page, s3Key, '#gauge_0', 20, 20)
  // create manifest file
  await getManifestLabelJson(s3Key, bp)
}

async function generateMultipleGaugeImage(page, bp) {
  const s3Key = S3_IMAGE_FOLDER + '/multiple-gauges-bp' + bp + '.jpg'
  console.log('generating', s3Key)
  await scrapeImageAndSaveS3(page, s3Key, '#oil-well')
  //  create manifest file
  await getBoundingBoxManifestLabelJson(page, s3Key, bp)
}

exports.handler = async (event, context, callback) => {
  console.log('running handler')
  let browser = null
  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      // headless: chromium.headless,
      ignoreHTTPSErrors: true,
    })
    let page = await browser.newPage()
    let url
    for (let i = 10; i < 14; i++) {
        let paddedBp = zeroPad(i, 3);
        let bp = zeroPad(i, 3);
        url = URL_GAUGE_BUILDER_PREFIX + 'bp'+ zeroPad(bp++, 3)
        + ',bp' + zeroPad(bp++, 3) + ',bp'+ zeroPad(bp++, 3)
        + ',bp' + zeroPad(bp++, 3) + ',bp'+ zeroPad(bp++, 3)
        + ',bp'+ zeroPad(bp, 3);
        
        // prepare bounding box training data
        console.log('loading url', url);
        await page.setViewport({
          width: 1300,
          height: 900,
          deviceScaleFactor: 1
        });
        await page.goto(url);

        // original image
        await generateMultipleGaugeImage(page, paddedBp)

        // prepare single image training data
        url = URL_GAUGE_BUILDER_PREFIX + paddedBp;
        console.log('loading url', url);
        await page.setViewport({
          width: 700,
          height: 700,
          deviceScaleFactor: 1
        });
        await page.goto(url);
        // original image
        await generateSingleGaugeImage(page, paddedBp, '-original')
        /* rotate image 30
        await page.evaluate(() => { document.body.style.transform = 'rotate(30deg)'; });
        await generateImageAndSaveS3(page, paddedBp,'-rotated30', 0, 0)
        */
    }
    // finished
    console.log('finished taking screenshots');
    // write manifest file
    const manifestLabelsText = manifestLabels.join('\r\n')
    console.log('manifestLabelsText', manifestLabelsText)
    // save manifest file to S3
    const manifestS3Key = S3_IMAGE_FOLDER + '/gauge-pressure.manifest'
    const manifestS3Params = {
      Bucket: S3_TRAINING_BUCKET,
      Key: manifestS3Key,
      Body: manifestLabelsText
    };
    manifestFile = 's3://' + S3_TRAINING_BUCKET + '/' + manifestS3Key
    console.log('writing manifest file to', manifestFile)
    // await s3.putObject(manifestS3Params).promise();

  } catch (error) {
    // return callback(error);
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
  const response = {
    'images': imageList,
    'labels': labelList,
    'manifest': manifestFile
  }
  console.log('response', response)
  return response
  // return callback(null, imageList);
};

exports.handler()
