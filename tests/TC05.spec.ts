import { test, expect, BrowserContext } from '@playwright/test';
import { CreateNewsPage } from '../pages/CreateNewsPage';

test.describe('Валідація поля "Основний текст"', () => {
  let createNewsPage: CreateNewsPage;
  let context: BrowserContext;

  test.beforeEach(async ({ browser }) => {
    context = await browser.newContext({ storageState: 'auth.json' });
    const page = await context.newPage();
    createNewsPage = new CreateNewsPage(page, page.locator('body'));
    await page.goto('https://www.greencity.cx.ua/#/greenCity/news/create-news');
    await page.waitForLoadState('networkidle');
  });

  test.afterEach(async () => {
    await context.close();
  });

  test('Помилка, якщо text занадто короткий (10 символів)', async () => {
    await createNewsPage.titleInput.fill('Тест заголовок');

    await createNewsPage.page.locator('.ql-editor').click();
    await createNewsPage.page.locator('.ql-editor').pressSequentially('Короткий.');

    await expect(createNewsPage.contentErrorMessage).toBeVisible({ timeout: 10000 });
    await expect(createNewsPage.publishButton).toBeDisabled();
  });

  test('Текст обрізається до 63206 символів', async () => {
  const editor = createNewsPage.page.locator('.ql-editor');
  
  await editor.fill('a'.repeat(100));
  
  await expect(createNewsPage.contentErrorMessage).not.toBeVisible({ timeout: 10000 });
  
  const actualText = await editor.innerText();
  expect(actualText.trim().length).toBeLessThanOrEqual(63206);
});

  test('Успішна публікація з валідним текстом', async () => {
    await createNewsPage.titleInput.fill('Тест унікальний заголовок №05');
    await createNewsPage.newsTag.click();
    await createNewsPage.page.locator('.ql-editor').fill('Це дійсний тестовий вміст довжиною більше двадцяти символів.');

    await expect(createNewsPage.contentErrorMessage).not.toBeVisible({ timeout: 20000 });
    await expect(createNewsPage.publishButton).toBeEnabled();
    await createNewsPage.publishButton.click();
    await expect(createNewsPage.page).toHaveURL(/.*news/);
  });
});