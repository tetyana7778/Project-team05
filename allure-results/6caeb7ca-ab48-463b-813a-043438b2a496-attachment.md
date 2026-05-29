# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC06.spec.ts >> Валідація поля "Джерело" >> Валідний URL — помилка зникає, публікація успішна
- Location: tests\TC06.spec.ts:55:7

# Error details

```
Error: page.waitForLoadState: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test, expect, BrowserContext } from '@playwright/test';
  2  | import { CreateNewsPage } from '../pages/CreateNewsPage';
  3  | 
  4  | test.describe('Валідація поля "Джерело"', () => {
  5  |   let createNewsPage: CreateNewsPage;
  6  |   let context: BrowserContext;
  7  | 
  8  |   test.beforeEach(async ({ browser }) => {
  9  |     context = await browser.newContext({ storageState: 'auth.json' });
  10 |     const page = await context.newPage();
  11 |     createNewsPage = new CreateNewsPage(page, page.locator('body'));
  12 | 
  13 |     await test.step('Відкрити форму створення новини', async () => {
  14 |       await page.goto('https://www.greencity.cx.ua/#/greenCity/news/create-news');
> 15 |       await page.waitForLoadState('networkidle');
     |                  ^ Error: page.waitForLoadState: Target page, context or browser has been closed
  16 |     });
  17 |   });
  18 | 
  19 |   test.afterEach(async () => {
  20 |     await context.close();
  21 |   });
  22 | 
  23 |   test('Порожнє поле "Джерело" — публікація успішна', async () => {
  24 |     await test.step('Заповнити обов\'язкові поля', async () => {
  25 |       await createNewsPage.titleInput.fill('Тест заголовок для TC06');
  26 |       await createNewsPage.newsTag.click();
  27 |       await createNewsPage.page.locator('.ql-editor').fill('Це тестовий вміст довжиною більше двадцяти символів.');
  28 |     });
  29 | 
  30 |     await test.step('Залишити поле "Джерело" порожнім і перевірити відсутність помилки', async () => {
  31 |       await expect(createNewsPage.sourceErrorMessage).not.toBeVisible();
  32 |     });
  33 | 
  34 |     await test.step('Перевірити що кнопка "Опублікувати" активна', async () => {
  35 |       await expect(createNewsPage.publishButton).toBeEnabled();
  36 |     });
  37 |   });
  38 | 
  39 |   test('Невалідний URL — помилка і кнопка неактивна', async () => {
  40 |     await test.step('Ввести невалідний URL у поле "Джерело"', async () => {
  41 |       await createNewsPage.sourceInput.fill('www.example.com');
  42 |       await createNewsPage.sourceInput.blur();
  43 |     });
  44 | 
  45 |     await test.step('Перевірити що з\'явилось повідомлення про помилку', async () => {
  46 |       await expect(createNewsPage.sourceErrorMessage).toBeVisible({ timeout: 10000 });
  47 |       await expect(createNewsPage.sourceErrorMessage).toContainText(/будь ласка, додайте посилання|please add the link/i);
  48 |     });
  49 | 
  50 |     await test.step('Перевірити що кнопка "Опублікувати" неактивна', async () => {
  51 |       await expect(createNewsPage.publishButton).toBeDisabled();
  52 |     });
  53 |   });
  54 | 
  55 |   test('Валідний URL — помилка зникає, публікація успішна', async () => {
  56 |     await test.step('Ввести невалідний URL і отримати помилку', async () => {
  57 |       await createNewsPage.sourceInput.fill('www.example.com');
  58 |       await createNewsPage.sourceInput.blur();
  59 |       await expect(createNewsPage.sourceErrorMessage).toBeVisible({ timeout: 10000 });
  60 |     });
  61 | 
  62 |     await test.step('Замінити на валідний URL', async () => {
  63 |       await createNewsPage.sourceInput.fill('https://example.com');
  64 |       await createNewsPage.sourceInput.blur();
  65 |     });
  66 | 
  67 |     await test.step('Перевірити що помилка зникла', async () => {
  68 |       await expect(createNewsPage.sourceErrorMessage).not.toBeVisible({ timeout: 10000 });
  69 |     });
  70 | 
  71 |     await test.step('Заповнити обов\'язкові поля і опублікувати', async () => {
  72 |       await createNewsPage.titleInput.fill('Тест заголовок TC06 валідне джерело');
  73 |       await createNewsPage.newsTag.click();
  74 |       await createNewsPage.page.locator('.ql-editor').fill('Це тестовий вміст довжиною більше двадцяти символів.');
  75 |       await expect(createNewsPage.publishButton).toBeEnabled();
  76 |       await createNewsPage.publishButton.click();
  77 |     });
  78 | 
  79 |     await test.step('Перевірити успішну публікацію', async () => {
  80 |       await expect(createNewsPage.page).toHaveURL(/.*news/);
  81 |     });
  82 |   });
  83 | });
```