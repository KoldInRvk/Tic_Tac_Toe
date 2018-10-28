const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://github.com/KoldInRvk/Tic_Tac_Toe/blob/master/docs/Design_report.markdown', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'Design_Manual.pdf', format: 'A4'});

  await browser.close();
})();
