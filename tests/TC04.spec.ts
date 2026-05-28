import { test, expect } from '@playwright/test';
import { HeaderComponent } from '../components/HeaderComponent';
import { CreateNewsPage } from '../pages/CreateNewsPage';
import { LoginPage } from '../pages/login.page';

test.describe('Валідація поля завантаження зображення', () => {
  let header: HeaderComponent;
  let createNewsPage: CreateNewsPage;
  let loginPage: LoginPage;

  const validPngPath = 'D:/OT/CourseAutomation/Project/Project-team05/fixtures/valid-image.png';
  const invalidGifPath = 'D:/OT/CourseAutomation/Project/Project-team05/fixtures/invalid-format.gif';
  const tooLargeJpgPath = 'D:/OT/CourseAutomation/Project/Project-team05/fixtures/too-large.jpg';

  test.beforeEach(async ({ page }) => {
    header = new HeaderComponent(page, page.locator('body'));
    createNewsPage = new CreateNewsPage(page, page.locator('body'));
    loginPage = new LoginPage(page); 

    // 1. Відкриваємо головну сторінку Green City
    await page.goto('https://www.greencity.cx.ua/');

    // 2. Переходимо на сторінку створення новин
    await page.goto('https://www.greencity.cx.ua/#/greenCity/news/create-news');
  });

  test('Успішне завантаження валідного PNG', async ({ page }) => {
    const fileInput = createNewsPage.imageDropZone.locator('input[type="file"]');
    await fileInput.setInputFiles(validPngPath);

    const errorMessage = page.locator('.error-message, .warning-text'); 
    await expect(errorMessage).not.toBeVisible();
  });

  test('Помилка при завантаженні невірного формату (GIF)', async ({ page }) => {
    const fileInput = createNewsPage.imageDropZone.locator('input[type="file"]');
    await fileInput.setInputFiles(invalidGifPath);

    await expect(createNewsPage.errorMessage).toBeVisible({ timeout: 10000 });
    
    await expect(createNewsPage.errorMessage).toHaveText(
      'Upload only PNG or JPG. File size must be less than 10MB'
    );
  });

  test('Помилка при завантаженні файлу більше 10 МБ', async ({ page }) => {
    const fileInput = createNewsPage.imageDropZone.locator('input[type="file"]');
    await fileInput.setInputFiles(tooLargeJpgPath);
  
    await expect(createNewsPage.errorMessage).toBeVisible({ timeout: 10000 });

    await expect(createNewsPage.errorMessage).toHaveText(
      'Upload only PNG or JPG. File size must be less than 10MB'
    );
  }); 
});