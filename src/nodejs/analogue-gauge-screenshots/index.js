/*
invoke with
AWS_PROFILE=cv S3_TRAINING_BUCKET=analogue-gauge-images-158287123688 node index.js
*/
const chromium = require('chrome-aws-lambda')
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const s3Bucket = process.env.S3_TRAINING_BUCKET

const URL_GAUGE_BUILDER_PREFIX = 'https://aws-computer-vision.jacobcantwell.com/gauge/?view=training&bp='
const S3_IMAGE_FOLDER = 'training-images'
const zeroPad = (num, places) => String(num).padStart(places, '0')

async function generateImageAndSaveS3(page, bp, transformSuffix, clipX, clipY) {
  const s3KeyPrefix = S3_IMAGE_FOLDER + '/gauge-bp-'
  const s3KeySuffix = '.jpg'
  try {
    console.log('generateImageAndSaveS3', transformSuffix)
    const s3Key = s3KeyPrefix + bp + transformSuffix + s3KeySuffix
    console.log('capturing ' + transformSuffix + ' image', s3Key)
    const screenshotParams = {
      // path: s3Key, // uncomment if running
      clip: { x: clipX, y: clipY, width: 490, height: 490 }
    }
    console.log('screenshotParams', screenshotParams)
    const screenshot = await page.screenshot(screenshotParams)
    // save files to S3
    const s3Params = {
      Bucket: s3Bucket,
      Key: s3Key,
      Body: screenshot
    };
    console.log('writing to s3', s3Bucket, s3Key)
    await s3.putObject(s3Params).promise();
  } catch (error) {
    console.error('error', error)
  }
}

exports.handler = async (event, context, callback) => {
  console.log('running handler')
  let result = null
  let browser = null
  let results = []
  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      // headless: chromium.headless,
      ignoreHTTPSErrors: true,
    })
    let page = await browser.newPage();
    for (let i = 0; i < 1; i++) {
        let bp = zeroPad(i, 3);
        const url = URL_GAUGE_BUILDER_PREFIX + bp;
        console.log('loading url', url);
        await page.setViewport({
          width: 700,
          height: 780,
          deviceScaleFactor: 0.8
        });
        await page.goto(url);
        // original image
        await generateImageAndSaveS3(page, bp, '-original', 155, 98)
        // rotate image 45
        await page.evaluate(() => { document.body.style.transform = 'rotate(45deg)'; });
        await generateImageAndSaveS3(page, bp,'-rotated45', 200, 160)
        // rotate image 90
        await page.evaluate(() => { document.body.style.transform = 'rotate(90deg)'; });
        await generateImageAndSaveS3(page, bp, '-rotated90', 190, 235)
        // rotate image 135
        await page.evaluate(() => { document.body.style.transform = 'rotate(135deg)'; });
        await generateImageAndSaveS3(page, bp, '-rotated135', 135, 290)
        // rotate image 180
        await page.evaluate(() => { document.body.style.transform = 'rotate(180deg)'; });
        await generateImageAndSaveS3(page, bp,'-rotated180', 58, 270)
        // rotate image 270
        await page.evaluate(() => { document.body.style.transform = 'rotate(270deg)'; });
        await generateImageAndSaveS3(page, bp, '-rotated270', 23, 137)
        // finished
        console.log('finished taking screenshots');
        results.push(url);
    }
    result = {
        urls: results
    }
} catch (error) {
    // return callback(error);
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
  // return callback(null, result);
};

exports.handler();
