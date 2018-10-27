const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///C:/Users/danni/AppData/Local/Temp/Temp1_TicTacToe_HUG.zip/TicTacToe%20%20HUG/TicTacToe.html');
  await page.screenshot({path: 'test.png'});

  await browser.close();
})();
