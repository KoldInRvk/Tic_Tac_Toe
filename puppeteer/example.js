const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://github.com/KoldInRvk/Tic_Tac_Toe');
  await page.screenshot({path: 'test2.png'});

  await browser.close();
})();
