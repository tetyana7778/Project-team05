import { test, expect, BrowserContext, Page } from '@playwright/test';
import { CreateNewsPage } from '../pages/CreateNewsPage';

test.describe('TC02 — Валідація поля "Title"', () => {
  let createNewsPage: CreateNewsPage;
  let context: BrowserContext;
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    context = await browser.newContext({ storageState: 'auth.json' });
    page = await context.newPage();
    createNewsPage = new CreateNewsPage(page, page.locator('body'));

    await test.step('Відкрити форму створення новини', async () => {
      await page.goto('https://www.greencity.cx.ua/#/greenCity/news/create-news');
      await page.waitForLoadState('networkidle');
    });
  });

  test.afterEach(async () => {
    await context.close();
  });

  // ─── Тест 1: Початковий стан — порожнє поле ──────────────────────────────

  test('Порожнє поле Title: червона рамка, лічильник "0/170", Publish заблокований', async () => {
    await test.step('Клікнути на поле Title і покинути його (спровокувати стан "touched")', async () => {
      await createNewsPage.titleInput.click();
      // Клік на нейтральній зоні (contentArea) дає focus-out на titleInput
      await createNewsPage.contentArea.click();
    });

    await test.step('Перевірити, що рамка поля Title підсвічена червоним (клас ng-invalid)', async () => {
      await expect(createNewsPage.titleInput).toHaveClass(/ng-invalid/);
    });

    await test.step('Перевірити, що кнопка "Publish" заблокована', async () => {
      await expect(createNewsPage.publishButton).toBeDisabled();
    });

    await test.step('Перевірити, що лічильник відображає "0/170"', async () => {
      await expect(createNewsPage.titleCounter).toContainText('0/170');
    });
  });

  // ─── Тест 2: Введення 171 символу — обрізання до 170 ─────────────────────

  test('Введення 172 символу: текст обрізається до 171, лічильник підсвічений червоним', async () => {
    const stringOver171 = 'A'.repeat(172);

    await test.step('Ввести рядок з 172 символів у поле Title', async () => {
      await createNewsPage.titleInput.fill(stringOver171);
    });

    await test.step('Перевірити, що значення поля містить рівно 171 символів (обрізання)', async () => {
      const value = await createNewsPage.titleInput.inputValue();
      expect(value.length).toBe(171);
    });

    await test.step('Перевірити, що лічильник підсвічений червоним при перевищенні ліміту', async () => {
      await expect(createNewsPage.titleInput).toHaveClass(/ng-invalid/);
});
  });

  // ─── Тест 3: Валідний заголовок — нормальний стан ────────────────────────

  test('Валідний заголовок "Test News": лічильник "9/170", рамка нормальна', async () => {
    await test.step('Ввести валідний заголовок "Test News" (9 символів)', async () => {
      await createNewsPage.titleInput.fill('Test News');
    });

    await test.step('Перевірити, що лічильник відображає "9/170"', async () => {
      await expect(createNewsPage.titleCounter).toContainText('9/170');
    });

    await test.step('Перевірити, що рамка поля Title не червона (ng-valid)', async () => {
      await expect(createNewsPage.titleInput).not.toHaveClass(/ng-invalid/);
    });
  });

  // ─── Тест 4: Publish стає активним після заповнення всіх обов'язкових полів

  test('Publish заблокований до заповнення Title + тегу + Main Text, потім стає активним', async () => {
    await test.step('Ввести валідний заголовок', async () => {
      await createNewsPage.titleInput.fill('Test News TC02');
    });

    await test.step('Перевірити, що Publish заблокований (тег і Main Text відсутні)', async () => {
      await expect(createNewsPage.publishButton).toBeDisabled();
    });

    await test.step('Вибрати тег "News"', async () => {
      await createNewsPage.newsTag.click();
    });

    await test.step('Перевірити, що Publish все ще заблокований (Main Text відсутній)', async () => {
      await expect(createNewsPage.publishButton).toBeDisabled();
    });

    await test.step('Ввести валідний текст у поле Main Text (більше 20 символів)', async () => {
      await createNewsPage.contentArea.click();
      await createNewsPage.contentArea.fill('Це достатньо довгий тестовий текст для валідної публікації.');
    });

    await test.step('Перевірити, що кнопка Publish стала активною', async () => {
      await expect(createNewsPage.publishButton).toBeEnabled({ timeout: 5000 });
    });
  });
});