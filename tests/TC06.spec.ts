import { test, expect, BrowserContext } from '@playwright/test';
import { CreateNewsPage } from '../pages/CreateNewsPage';

test.describe('Валідація поля "Джерело"', () => {
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

  test('Порожнє поле "Джерело" — публікація успішна', async () => {
    await test.step('Заповнити обов\'язкові поля', async () => {
      await createNewsPage.titleInput.fill('Тест заголовок для TC06');
      await createNewsPage.newsTag.click();
      await createNewsPage.page.locator('.ql-editor').fill('Це тестовий вміст довжиною більше двадцяти символів.');
    });

    await test.step('Залишити поле "Джерело" порожнім і перевірити відсутність помилки', async () => {
      await expect(createNewsPage.sourceErrorMessage).not.toBeVisible();
    });

    await test.step('Перевірити що кнопка "Опублікувати" активна', async () => {
      await expect(createNewsPage.publishButton).toBeEnabled();
    });
  });

  test('Невалідний URL — помилка і кнопка неактивна', async () => {
    await test.step('Ввести невалідний URL у поле "Джерело"', async () => {
      await createNewsPage.sourceInput.fill('www.example.com');
      await createNewsPage.sourceInput.blur();
    });

    await test.step('Перевірити що з\'явилось повідомлення про помилку', async () => {
      await expect(createNewsPage.sourceErrorMessage).toBeVisible({ timeout: 10000 });
      await expect(createNewsPage.sourceErrorMessage).toContainText(/будь ласка, додайте посилання|please add the link/i);
    });

    await test.step('Перевірити що кнопка "Опублікувати" неактивна', async () => {
      await expect(createNewsPage.publishButton).toBeDisabled();
    });
  });

  test('Валідний URL — помилка зникає, публікація успішна', async () => {
    await test.step('Ввести невалідний URL і отримати помилку', async () => {
      await createNewsPage.sourceInput.fill('www.example.com');
      await createNewsPage.sourceInput.blur();
      await expect(createNewsPage.sourceErrorMessage).toBeVisible({ timeout: 10000 });
    });

    await test.step('Замінити на валідний URL', async () => {
      await createNewsPage.sourceInput.fill('https://example.com');
      await createNewsPage.sourceInput.blur();
    });

    await test.step('Перевірити що помилка зникла', async () => {
      await expect(createNewsPage.sourceErrorMessage).not.toBeVisible({ timeout: 10000 });
    });

    await test.step('Заповнити обов\'язкові поля і опублікувати', async () => {
      await createNewsPage.titleInput.fill('Тест заголовок TC06 валідне джерело');
      await createNewsPage.newsTag.click();
      await createNewsPage.page.locator('.ql-editor').fill('Це тестовий вміст довжиною більше двадцяти символів.');
      await expect(createNewsPage.publishButton).toBeEnabled();
      await createNewsPage.publishButton.click();
    });

    await test.step('Перевірити успішну публікацію', async () => {
      await expect(createNewsPage.page).toHaveURL(/.*news/);
    });
  });
});