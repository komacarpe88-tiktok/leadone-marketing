import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 375, height: 812 });
await page.goto('https://leadone.online', { waitUntil: 'networkidle', timeout: 30000 });

const scrollPositions = [0, 900, 1800, 2700, 3600, 4500, 5400, 6300, 7200, 8100, 9000, 9900];
for (let i = 0; i < scrollPositions.length; i++) {
  await page.evaluate((y) => window.scrollTo(0, y), scrollPositions[i]);
  await page.waitForTimeout(700);
  await page.screenshot({ path: `C:/Users/Dougl/AppData/Local/Temp/mob-scroll-${i}.png` });
}

await browser.close();
console.log('done');
