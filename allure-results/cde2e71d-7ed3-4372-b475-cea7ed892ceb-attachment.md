# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC01.spec.ts >> TC-01 | Форма "Create News" містить всі поля у правильному порядку >> Всі поля присутні у правильному порядку
- Location: tests\TC01.spec.ts:23:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('span').filter({ hasText: /^0\/170$/ })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('span').filter({ hasText: /^0\/170$/ })

```

# Test source

```ts
  1  | import { test, expect, BrowserContext } from '@playwright/test';
  2  | import { CreateNewsPage } from '../pages/CreateNewsPage';
  3  | 
  4  | test.describe('TC-01 | Форма "Create News" містить всі поля у правильному порядку', () => {
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
  15 |       await page.waitForLoadState('networkidle');
  16 |     });
  17 |   });
  18 | 
  19 |   test.afterEach(async () => {
  20 |     await context.close();
  21 |   });
  22 | 
  23 |   test('Всі поля присутні у правильному порядку', async () => {
  24 |     await test.step('Перевірити поле "Title" з лічильником 0/170', async () => {
  25 |       await expect(createNewsPage.titleInput).toBeVisible();
  26 |       // Лічильник — span у тому ж блоці що й заголовок "Title"
  27 |       const counter = createNewsPage.page.locator('span').filter({ hasText: /^0\/170$/ });
> 28 |       await expect(counter).toBeVisible();
     |                             ^ Error: expect(locator).toBeVisible() failed
  29 |     });
  30 | 
  31 |     await test.step('Перевірити наявність поля "Tag" з усіма 5 тегами', async () => {
  32 |       await expect(createNewsPage.newsTag).toBeVisible();
  33 |       await expect(createNewsPage.eventsTag).toBeVisible();
  34 |       await expect(createNewsPage.educationTag).toBeVisible();
  35 |       await expect(createNewsPage.initiativesTag).toBeVisible();
  36 |       await expect(createNewsPage.adsTag).toBeVisible();
  37 |     });
  38 | 
  39 |     await test.step('Перевірити наявність поля "Add Image"', async () => {
  40 |       await expect(createNewsPage.imageDropZone).toBeVisible();
  41 |     });
  42 | 
  43 |     await test.step('Перевірити наявність поля "Main Text" з описом ліміту', async () => {
  44 |       await expect(createNewsPage.contentArea).toBeVisible();
  45 |       // У DOM є параграф "Must be minimum 20 and maximum 63 206 symbols"
  46 |       await expect(createNewsPage.contentDescription).toBeVisible();
  47 |     });
  48 | 
  49 |     await test.step('Перевірити що поле "Author" відображається і не редагується', async () => {
  50 |       // У DOM: <p>Author: Тестовий юзер</p> — звичайний параграф (не input)
  51 |       await expect(createNewsPage.authorField).toBeVisible();
  52 |     });
  53 | 
  54 |     await test.step('Перевірити що поле "Date" відображається і не редагується', async () => {
  55 |       // У DOM: <p>Date: May 31, 2026</p> — звичайний параграф (не input)
  56 |       await expect(createNewsPage.dateField).toBeVisible();
  57 |     });
  58 | 
  59 |     await test.step('Перевірити наявність поля "Source" з плейсхолдером http(s)://', async () => {
  60 |       await expect(createNewsPage.sourceInput).toBeVisible();
  61 |       await expect(createNewsPage.sourceInput).toHaveAttribute('placeholder', /http/i);
  62 |     });
  63 | 
  64 |     await test.step('Перевірити наявність кнопок Cancel, Preview, Publish', async () => {
  65 |       await expect(createNewsPage.cancelButton).toBeVisible();
  66 |       await expect(createNewsPage.previewButton).toBeVisible();
  67 |       await expect(createNewsPage.publishButton).toBeVisible();
  68 |     });
  69 |   });
  70 | });
```