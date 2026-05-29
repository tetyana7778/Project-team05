import { Page, Locator } from '@playwright/test';

export abstract class BasePage {
  // Додамо базові елементи, які є абсолютно на всіх сторінках (наприклад, спіннер завантаження)
  protected readonly pageSpinner: Locator;

  constructor(protected readonly page: Page) {
    // Ініціалізуємо загальний для сайту індикатор завантаження (якщо він є в Green City)
    this.pageSpinner = this.page.locator('.loading-spinner, #spinner');
  }

  // Твій метод навігації — супер, але давай додамо очікування, щоб тести не падали через повільний інтернет
  async navigate(path: string = ''): Promise<void> {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
  }

  // Твій метод для отримання тайтлу сторінки — залишаємо, він чудовий
  async getTitle(): Promise<string> {
    return this.page.title();
  }

  /**
   * ДОДАТКОВІ ЗРУЧНІ МЕТОДИ ДЛЯ ВСІХ СТОРІНОК:
   */

  // Метод для очікування, поки зникне індикатор завантаження сайту
  async waitForPageLoad(): Promise<void> {
    if (await this.pageSpinner.isVisible()) {
      await this.pageSpinner.waitFor({ state: 'detached' });
    }
  }

  // Метод для отримання поточної URL-адреси (дуже часто треба в тестах для перевірок)
  async getUrl(): Promise<string> {
    return this.page.url();
  }

  // Метод для перезавантаження сторінки
  async reloadPage(): Promise<void> {
    await this.page.reload({ waitUntil: 'domcontentloaded' });
  }
}