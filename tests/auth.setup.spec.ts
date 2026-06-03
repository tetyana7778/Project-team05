import { test as setup } from '@playwright/test';

setup('зберегти сесію', async ({ page }) => {
  await page.goto('https://www.greencity.cx.ua/#/greenCity');
  await page.pause();
  await page.context().storageState({ path: 'auth.json' });
});