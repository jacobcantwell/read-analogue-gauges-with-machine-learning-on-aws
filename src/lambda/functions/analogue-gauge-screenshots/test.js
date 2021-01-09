const puppeteer = require('puppeteer');

async function run() {
    let browser = await puppeteer.launch({ headless: true });
    let page = await browser.newPage();
    for (i = 0; i < 231; i++) {
        let bp = i;
        const url = 'https://aws-computer-vision.jacobcantwell.com/gauge/?bp=' + bp;
        const outputPath = './output/gauge-bp-'+bp+'.jpg';
        await page.goto(url);
        await page.screenshot({ path: outputPath, type: 'jpeg', fullPage: true });
        console.log('finished screenshot', url, outputPath);
    }
    await page.close();
    await browser.close(); 
}

run();
