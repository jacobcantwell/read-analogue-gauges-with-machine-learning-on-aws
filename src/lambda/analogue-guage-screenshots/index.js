const puppeteer = require('puppeteer');

async function run() {
    let browser = await puppeteer.launch({ headless: true });
    let page = await browser.newPage();
    await page.goto('https://aws-computer-vision.jacobcantwell.com/guage/?bp=100');
    // await page.setViewport({ width: 800, height: 900 });
    await page.screenshot({ path: './image.jpg', type: 'jpg', fullPage: true });
    await page.close();
    await browser.close();
}

run();
