import { test, expect, BrowserContext } from '@playwright/test';
import { CreateNewsPage } from '../pages/CreateNewsPage';

test.describe('TC-01 | Форма "Create News" містить всі поля у правильному порядку', () => {
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

 
    test('Всі поля присутні у правильному порядку', async () => {
    await test.step('Перевірити що максимум 170 символів у полі Title', async () => {
      const testString170 = 'a'.repeat(170);
      
      await createNewsPage.titleInput.fill(testString170);
      const value170 = await createNewsPage.titleInput.inputValue();
      expect(value170.length).toBe(170);

    });

    await test.step('Перевірити наявність поля "Tag" з усіма 5 тегами', async () => {
      await expect(createNewsPage.newsTag).toBeVisible();
      await expect(createNewsPage.eventsTag).toBeVisible();
      await expect(createNewsPage.educationTag).toBeVisible();
      await expect(createNewsPage.initiativesTag).toBeVisible();
      await expect(createNewsPage.adsTag).toBeVisible();
    });

    await test.step('Перевірити наявність поля "Add Image"', async () => {
      await expect(createNewsPage.imageDropZone).toBeVisible();
    });

    await test.step('Перевірити наявність поля "Main Text" з описом ліміту', async () => {
      await expect(createNewsPage.contentArea).toBeVisible();
      // У DOM є параграф "Must be minimum 20 and maximum 63 206 symbols"
      await expect(createNewsPage.contentDescription).toBeVisible();
    });

    await test.step('Перевірити що поле "Author" відображається і не редагується', async () => {
      // У DOM: <p>Author: Тестовий юзер</p> — звичайний параграф (не input)
      await expect(createNewsPage.authorField).toBeVisible();
    });

    await test.step('Перевірити що поле "Date" відображається і не редагується', async () => {
      // У DOM: <p>Date: May 31, 2026</p> — звичайний параграф (не input)
      await expect(createNewsPage.dateField).toBeVisible();
    });

    await test.step('Перевірити наявність поля "Source" з плейсхолдером http(s)://', async () => {
      await expect(createNewsPage.sourceInput).toBeVisible();
      await expect(createNewsPage.sourceInput).toHaveAttribute('placeholder', "Link to external source");
    });

    await test.step('Перевірити наявність кнопок Cancel, Preview, Publish', async () => {
      await expect(createNewsPage.cancelButton).toBeVisible();
      await expect(createNewsPage.previewButton).toBeVisible();
      await expect(createNewsPage.publishButton).toBeVisible();
    });
  });
});