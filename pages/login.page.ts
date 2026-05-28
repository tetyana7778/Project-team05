import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page'; // Імпортуємо базову сторінку, яку створила команда

export class LoginPage extends BasePage {
  // 1. Описуємо типи для наших локаторів (елементів сторінки)
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly signInGoogleButton: Locator; 
  
  constructor(page: Page) {
    // Якщо клас наслідується від BasePage, обов'язково викликаємо super(page)
    super(page); 
    this.page = page;
    
    // 2. Ініціалізуємо локатори (ТЕПЕР ВОНИ ВСЕРЕДИНІ КОНСТРУКТОРА)
    this.emailInput = page.getByRole('textbox', { name: /email|електронна пошта/i });
    this.passwordInput = page.getByRole('textbox', { name: /password|пароль/i, exact: true });
    this.signInButton = page.getByRole('button', { name: /sign in|увійти/i }); // прибрав exact, щоб легше шукало
    this.signInGoogleButton = page.getByRole('button', { name: /Google sign-in Sign in with Google|увійти за допомогою Google/i });
  } // <-- Оця дужка тепер закриває конструктор ПІСЛЯ ініціалізації локаторів!

  // 3. Метод для звичайного входу (якщо колись знадобиться)
  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  // 4. Створюємо новий метод спеціально для входу через Google
  async loginWithGoogle() {
    // 1. Чекаємо, поки кнопка Google з'явиться на екрані
    await this.signInGoogleButton.waitFor({ state: 'visible', timeout: 30000 });
    
    // 2. Клікаємо по ній
    await this.signInGoogleButton.click();
    
    // 3. Даємо затримку 5 секунд, щоб встигло відкритися вікно вибору акаунта Google
    await this.page.waitForTimeout(5000); 
  }
}