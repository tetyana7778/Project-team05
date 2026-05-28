import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page'; // Імпортуємо базову сторінку, яку створила команда

export class LoginPage extends BasePage {
  // 1. Описуємо типи для наших локаторів (елементів сторінки)
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly signInGoogleButton: Locator; //
  constructor(page: Page) {
    // Спочатку викликаємо конструктор базової сторінки (батьківського класу)
    super(page);
    // 2. Ініціалізуємо локатори за допомогою методів Playwright
    this.emailInput = page.getByRole('textbox', { name: /email|електронна пошта/i });
    this.passwordInput = page.getByRole('textbox', { name: /password|пароль/i, exact: true });
    this.signInButton = page.getByRole('button', { name: /sign in|увійти/i, exact: true });
    this.signInGoogleButton = page.getByRole('button', { name: /Google sign-in Sign in with Google|увійти за допомогою Google/i  });
    


  // 3. Пишемо метод (екшен) для заповнення форми та входу
  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}