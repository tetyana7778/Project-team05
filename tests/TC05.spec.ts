import { test, expect, BrowserContext } from '@playwright/test';
import { CreateNewsPage } from '../pages/CreateNewsPage';

test.describe('Валідація поля "Основний текст"', () => {
  let createNewsPage: CreateNewsPage;
  let context: BrowserContext;

  test.beforeEach(async ({ browser }) => {
    context = await browser.newContext({ storageState: 'auth.json' });
    const page = await context.newPage();
    createNewsPage = new CreateNewsPage(page, page.locator('body'));

    await test.step('Відкрити форму створення новини', async () => {
      await page.goto('https://www.greencity.cx.ua/#/greenCity/news/create-news');
      await page.waitForLoadState('networkidle');
    });
  });

  test.afterEach(async () => {
    await context.close();
  });

  test('Помилка, якщо text занадто короткий (10 символів)', async () => {
    await test.step('Заповнити поле заголовку', async () => {
      await createNewsPage.titleInput.fill('Тест заголовок');
    });

    await test.step('Ввести текст коротший за 20 символів', async () => {
      await createNewsPage.page.locator('.ql-editor').click();
      await createNewsPage.page.locator('.ql-editor').pressSequentially('Короткий.');
    });

    await test.step('Перевірити що з\'явилось повідомлення про помилку', async () => {
      await expect(createNewsPage.contentErrorMessage).toBeVisible({ timeout: 10000 });
    });

    await test.step('Перевірити що кнопка "Опублікувати" неактивна', async () => {
      await expect(createNewsPage.publishButton).toBeDisabled();
    });
  });

  test('Текст обрізається до 63206 символів', async () => {
    await test.step('Ввести 100 символів у поле основного тексту', async () => {
      const editor = createNewsPage.page.locator('.ql-editor');
      await editor.fill('a'.repeat(100));
    });

    await test.step('Перевірити відсутність повідомлення про помилку', async () => {
      const editor = createNewsPage.page.locator('.ql-editor');
      await expect(createNewsPage.contentErrorMessage).not.toBeVisible({ timeout: 10000 });
      const actualText = await editor.innerText();
      expect(actualText.trim().length).toBeLessThanOrEqual(63206);
    });
  });

  test('Успішна публікація з валідним текстом', async () => {
    await test.step('Заповнити поле заголовку', async () => {
      await createNewsPage.titleInput.fill('Тест унікальний заголовок №05');
    });

    await test.step('Обрати тег новини', async () => {
      await createNewsPage.newsTag.click();
    });

    await test.step('Ввести валідний текст у поле основного тексту', async () => {
      await createNewsPage.page.locator('.ql-editor').fill('Це дійсний тестовий вміст довжиною більше двадцяти символів.');
    });

    await test.step('Перевірити відсутність помилки і активність кнопки', async () => {
      await expect(createNewsPage.contentErrorMessage).not.toBeVisible({ timeout: 20000 });
      await expect(createNewsPage.publishButton).toBeEnabled();
    });

    await test.step('Опублікувати новину і перевірити редирект', async () => {
      await createNewsPage.publishButton.click();
      await expect(createNewsPage.page).toHaveURL(/.*news/);
    });
  });
});