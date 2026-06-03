import { test, expect } from '@playwright/test';
import { HeaderComponent } from '../components/HeaderComponent';
import { CreateNewsPage } from '../pages/CreateNewsPage';
import { LoginPage } from '../pages/login.page';

test.describe('Валідація поля завантаження зображення', () => {
  let header: HeaderComponent;
  let createNewsPage: CreateNewsPage;
  let loginPage: LoginPage;

  const validPngPath = 'fixtures/valid-image.png';
  const invalidGifPath = 'fixtures/invalid-format.gif';
  const tooLargeJpgPath = 'fixtures/too-large.jpg';

  test.beforeEach(async ({ page }) => {
    header = new HeaderComponent(page, page.locator('body'));
    createNewsPage = new CreateNewsPage(page, page.locator('body'));
    loginPage = new LoginPage(page);

    await test.step('Відкрити головну сторінку Green City', async () => {
      await page.goto('https://www.greencity.cx.ua/');
    });

    await test.step('Перейти на сторінку створення новин', async () => {
      await page.goto('https://www.greencity.cx.ua/#/greenCity/news/create-news');
    });
  });

  test('Успішне завантаження валідного PNG', async ({ page }) => {
    await test.step('Завантажити валідний PNG файл', async () => {
      const fileInput = createNewsPage.imageDropZone.locator('input[type="file"]');
      await fileInput.setInputFiles(validPngPath);
    });

    await test.step('Перевірити відсутність повідомлення про помилку', async () => {
      const errorMessage = page.locator('.error-message, .warning-text');
      await expect(errorMessage).not.toBeVisible();
    });
  });

  test('Помилка при завантаженні невірного формату (GIF)', async ({ page }) => {
    await test.step('Завантажити файл невірного формату GIF', async () => {
      const fileInput = createNewsPage.imageDropZone.locator('input[type="file"]');
      await fileInput.setInputFiles(invalidGifPath);
    });

    await test.step('Перевірити що з\'явилось повідомлення про помилку', async () => {
      await expect(createNewsPage.errorMessage).toBeVisible({ timeout: 10000 });
    });

    await test.step('Перевірити текст повідомлення про помилку', async () => {
      await expect(createNewsPage.errorMessage).toHaveText(
        'Upload only PNG or JPG. File size must be less than 10MB'
      );
    });
  });

  test('Помилка при завантаженні файлу більше 10 МБ', async ({ page }) => {
    await test.step('Завантажити файл розміром більше 10 МБ', async () => {
      const fileInput = createNewsPage.imageDropZone.locator('input[type="file"]');
      await fileInput.setInputFiles(tooLargeJpgPath);
    });

    await test.step('Перевірити що з\'явилось повідомлення про помилку', async () => {
      await expect(createNewsPage.errorMessage).toBeVisible({ timeout: 10000 });
    });

    await test.step('Перевірити текст повідомлення про помилку', async () => {
      await expect(createNewsPage.errorMessage).toHaveText(
        'Upload only PNG or JPG. File size must be less than 10MB'
      );
    });
  });
});