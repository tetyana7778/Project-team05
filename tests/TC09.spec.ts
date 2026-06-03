import { test, expect, BrowserContext } from '@playwright/test';
import { test as base } from '@playwright/test';
import { NewsDetailPage } from '../pages/NewsDetailPage';
import * as allure from 'allure-js-commons';

test.describe('TC-09: Перевірка доступності кнопки "Редагування новини" для автора', () => {
  let newsDetailPage: NewsDetailPage;
  let context: BrowserContext;

  test.beforeEach(async ({ browser, page }) => {
    await test.step('Налаштування тестового контексту', async () => {
      // Використовуємо збережену сесію автентифікації
      try {
        context = await browser.newContext({ storageState: 'auth.json' });
      } catch (error) {
        // Якщо auth.json не існує, створюємо контекст без сесії
        console.warn('auth.json не знайдено. Тест буде виконаний без попередньої автентифікації');
        context = await browser.newContext();
      }

      const testPage = await context.newPage();
      newsDetailPage = new NewsDetailPage(testPage);

      await allure.description(
        'Тест перевіряє, що тільки автор новини може бачити кнопку "Редагування новини" на сторінці переглядання новини'
      );

      await allure.owner('QA Team');
      await allure.severity('high');
      await allure.tags('news', 'edit', 'permissions', 'ui');
    });
  });

  test.afterEach(async () => {
    await test.step('Закриття тестового контексту', async () => {
      await context.close();
    });
  });

  test('Кнопка "Редагування новини" видима для автора', async () => {
    const testPage = await context.newPage();
    newsDetailPage = new NewsDetailPage(testPage);

    await test.step('Відкрити головну сторінку Green City', async () => {
      await testPage.goto('https://www.greencity.cx.ua/');
      await testPage.waitForLoadState('networkidle');
    });

    await test.step('Перейти на сторінку еко-новин', async () => {
      await testPage.goto('https://www.greencity.cx.ua/#/greenCity/news');
      await testPage.waitForLoadState('networkidle');

      // Додамо затримку для завантаження контенту
      await testPage.waitForTimeout(2000);

      // Спробуємо знайти першу новину на сторінці
      const newsItems = testPage.locator('a[href*="/news/"]');
      const count = await newsItems.count();

      if (count > 0) {
        await test.step('Вибрати першу доступну новину', async () => {
          // Отримаємо посилання на першу новину
          const firstNewsLink = newsItems.first();
          const href = await firstNewsLink.getAttribute('href');

          if (href) {
            await testPage.goto(`https://www.greencity.cx.ua/${href}`);
            await testPage.waitForLoadState('networkidle');
          }
        });
      }
    });

    await test.step('Перевірити видимість кнопки "Редагування новини"', async () => {
      const isEditButtonVisible = await newsDetailPage.isEditButtonVisible();

      await allure.step('Запиту видимість кнопки редагування', async () => {
        expect(
          isEditButtonVisible,
          'Кнопка "Редагування новини" повинна бути видима для автора'
        ).toBe(true);
      });
    });

    await test.step('Перевірити властивості кнопки редагування', async () => {
      // Перевіримо, що кнопка не дезактивована
      const isEnabled = await newsDetailPage.editButton.isEnabled();

      expect(
        isEnabled,
        'Кнопка "Редагування новини" повинна бути активною'
      ).toBe(true);

      // Отримаємо текст кнопки
      const buttonText = await newsDetailPage.editButton.textContent();
      expect(buttonText?.toLowerCase()).toContain('edit');
    });

    await testPage.close();
  });

  test('Кнопка "Редагування новини" не видима для інших користувачів', async () => {
    const testPage = await context.newPage();
    newsDetailPage = new NewsDetailPage(testPage);

    await test.step('Відкрити новину без автентифікації', async () => {
      const guestContext = await testPage.context().browser()?.newContext();
      if (!guestContext) {
        test.skip();
        return;
      }

      const guestPage = await guestContext.newPage();

      await test.step('Навігація до сторінки еко-новин', async () => {
        await guestPage.goto('https://www.greencity.cx.ua/#/greenCity/news');
        await guestPage.waitForLoadState('networkidle');
        await guestPage.waitForTimeout(2000);
      });

      await test.step('Відкрити першу доступну новину', async () => {
        const newsItems = guestPage.locator('a[href*="/news/"]');
        const count = await newsItems.count();

        if (count > 0) {
          const firstNewsLink = newsItems.first();
          const href = await firstNewsLink.getAttribute('href');

          if (href) {
            await guestPage.goto(`https://www.greencity.cx.ua/${href}`);
            await guestPage.waitForLoadState('networkidle');
          }
        }
      });

      await test.step('Перевірити, що кнопка редагування не видима', async () => {
        const guestNewsPage = new NewsDetailPage(guestPage);
        const isEditButtonVisible = await guestNewsPage.isEditButtonVisible();

        // Для неавторизованого користувача кнопка не повинна бути видима
        // Це є очікуваною поведінкою системи
        expect(isEditButtonVisible).toBe(false);
      });

      await guestContext.close();
    });
  });

  test('Клік на кнопку "Редагування новини" навігує на сторінку редагування', async () => {
    const testPage = await context.newPage();
    newsDetailPage = new NewsDetailPage(testPage);

    await test.step('Відкрити новину (яка належить поточному користувачу)', async () => {
      await testPage.goto('https://www.greencity.cx.ua/#/greenCity/news');
      await testPage.waitForLoadState('networkidle');
      await testPage.waitForTimeout(2000);

      const newsItems = testPage.locator('a[href*="/news/"]');
      const count = await newsItems.count();

      if (count > 0) {
        const firstNewsLink = newsItems.first();
        const href = await firstNewsLink.getAttribute('href');

        if (href) {
          await testPage.goto(`https://www.greencity.cx.ua/${href}`);
          await testPage.waitForLoadState('networkidle');
        }
      }
    });

    await test.step('Перевірити наявність кнопки редагування і клікнути на неї', async () => {
      const isEditButtonVisible = await newsDetailPage.isEditButtonVisible();

      if (isEditButtonVisible) {
        await newsDetailPage.clickEditButton();

        // Перевіримо, що ми переміщені на сторінку редагування
        await test.step('Перевірити редирект на сторінку редагування', async () => {
          const currentUrl = await newsDetailPage.getUrl();
          expect(currentUrl).toMatch(/edit/i);
        });
      }
    });

    await testPage.close();
  });
});
