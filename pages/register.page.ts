import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class RegisterPage extends BasePage {
  // 1. Описуємо елементи форми реєстрації
  readonly emailInput: Locator;
  readonly nameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly signUpButton: Locator; 
  readonly signUpGoogleButton: Locator; // 
  constructor(page: Page) {  
    super(page);

    // 2. Сюди ми вставимо локатори, які ти зараз знайдеш
    this.emailInput = page.getByRole('textbox', { name: /email|електронна пошта/i }); 
    this.nameInput = page.getByRole('textbox', { name: /name|ім'я/i });
    this.passwordInput = page.getByRole('textbox', { name: /password|пароль/i });
    this.confirmPasswordInput = page.getByRole('textbox', { name: /confirm password|підтвердити пароль/i });
    this.signUpButton = page.getByRole('button', { name: /sign up|зареєструватися/i });
    this.signUpGoogleButton = page.getByRole('button', { name: / Sign up with Google|зареєструватися через Google/i  });
  }

  // 3. Метод для реєстрації нового користувача
  async register(email: string, name: string, password: string) {
    await this.emailInput.fill(email);
    await this.nameInput.fill(name);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
    await this.signUpButton.click();
  }
}