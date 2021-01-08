const chromium = require('chrome-aws-lambda')
const AWS = require("aws-sdk");
const s3 = new AWS.S3();
const s3Bucket = process.env.S3_TRAINING_BUCKET

const zeroPad = (num, places) => String(num).padStart(places, '0')

exports.handler = async (event, context, callback) => {
  let result = null
  let browser = null
  let results = []
  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    })
    let page = await browser.newPage();
    for (let i = 0; i < 231; i++) {
        let bp = zeroPad(i, 4);
        const url = 'https://aws-computer-vision.jacobcantwell.com/guage/?view=training&bp=' + bp;
        const s3Key = 'training-images/pressure-guage-bp-'+bp+'.jpg';
        await page.setViewport({ width: 700, height: 780 });
        await page.goto(url);
        const screenshot = await page.screenshot({
            type: 'jpeg',
            fullPage: true
        });
        const s3Params = {
            Bucket: s3Bucket,
            Key: s3Key,
            Body: screenshot
        };
        await s3.putObject(s3Params).promise();
        console.log('finished screenshot', s3Key);
        results.push(url);
    }
    result = {
        urls: results
    }
} catch (error) {
    return callback(error);
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
  return callback(null, result);
};