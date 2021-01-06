const chromium = require('chrome-aws-lambda');

exports.handler = async (event, context, callback) => {
  let result = null;
  let browser = null;
  let results = [];
  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });
    let page = await browser.newPage();
    for (i = 0; i < 231; i++) {
        let bp = i;
        const url = 'https://aws-computer-vision.jacobcantwell.com/guage/?bp=' + bp;
        const outputPath = './output/guage-bp-'+bp+'.jpg';
        await page.goto(url);
        await page.screenshot({ path: outputPath, type: 'jpeg', fullPage: true });
        console.log('finished screenshot', url, outputPath);
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
