import { test, expect, BrowserContext } from '@playwright/test';
import { CreateNewsPage } from '../pages/CreateNewsPage';

test.describe('TC-03 | Вибір від 1 до 3 тегів, 4-й тег заблокований', () => {
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

  test('Публікація новини з одним тегом "News"', async () => {
    await test.step('Вибрати тег "News"', async () => {
      await createNewsPage.newsTag.click();
    });

    await test.step('Перевірити що тег "News" неактивний', async () => {
      expect(await createNewsPage.isTagActive(createNewsPage.newsTag)).toBe(false);
    });


    await test.step('Заповнити обов\'язкові поля', async () => {
      await createNewsPage.titleInput.fill('TC-03 один тег');
      await createNewsPage.contentArea.fill('Це тестовий вміст довжиною більше двадцяти символів.');
    });

    await test.step('Опублікувати і перевірити редирект', async () => {
      await expect(createNewsPage.publishButton).toBeEnabled();
      await createNewsPage.publishButton.click();
      await expect(createNewsPage.page).toHaveURL(/.*news/);
    });
  });

  test('Публікація новини з трьома тегами: News, Events, Education', async () => {
    await test.step('Вибрати три теги: News, Events, Education', async () => {
      await createNewsPage.newsTag.click();
      await createNewsPage.eventsTag.click();
      await createNewsPage.educationTag.click();
    });

    await test.step('Перевірити що всі три теги неактивні', async () => {
      expect(await createNewsPage.isTagActive(createNewsPage.newsTag)).toBe(false);
      expect(await createNewsPage.isTagActive(createNewsPage.eventsTag)).toBe(false);
      expect(await createNewsPage.isTagActive(createNewsPage.educationTag)).toBe(false);
    });


    await test.step('Заповнити обов\'язкові поля і опублікувати', async () => {
      await createNewsPage.titleInput.fill('TC-03 три теги');
      await createNewsPage.contentArea.fill('Це тестовий вміст довжиною більше двадцяти символів.');
      await expect(createNewsPage.publishButton).toBeEnabled();
      await createNewsPage.publishButton.click();
      await expect(createNewsPage.page).toHaveURL(/.*news/);
    });
  });

  test('Вибір 4-го тегу неможливий після вибору 3-х', async () => {
    await test.step('Вибрати три теги: News, Events, Education', async () => {
      await createNewsPage.newsTag.click();
      await createNewsPage.eventsTag.click();
      await createNewsPage.educationTag.click();
    });


    await test.step('Спробувати вибрати 4-й тег "Initiatives"', async () => {
      const isDisabled = await createNewsPage.initiativesTag.isDisabled();

      if (isDisabled) {
        // Тег заблокований на рівні DOM
        expect(isDisabled).toBe(true);
      } else {
        // Клікаємо і перевіряємо, що кількість активних не збільшилась
        await createNewsPage.initiativesTag.click({ force: true });
        const countAfter = await createNewsPage.getSelectedTagsCount();
        expect(countAfter).toBeLessThanOrEqual(3);
      }
    });
  });
});