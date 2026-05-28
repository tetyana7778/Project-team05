
import { Locator, Page } from '@playwright/test';
import { BaseComponent } from '../pages/base.component';

export class HeaderComponent extends BaseComponent {
  // 1. Оголошуємо елементи (залишаємо як було)
  readonly logo: Locator;
  readonly ecoNewsLink: Locator;
  readonly eventsLink: Locator;
  readonly placesLink: Locator;
  readonly aboutUsLink: Locator;
  readonly myCabinetLink: Locator;
  readonly ubsCourierLink: Locator;
  readonly signInButton: Locator;
  readonly signUpButton: Locator;
  readonly languageSwitcherArrow: Locator;
  readonly enLanguageOption: Locator;
  readonly uaLanguageOption: Locator;

  //  конструктор тепер приймає і page, і root
  constructor(page: Page, root: Locator) {
    // Передаємо ТУТ обидва параметри батьківському класу.

    this.logo = page.locator('.logo-img');
    
    // Тепер замість page.getByLabel('Welcome to header') ми пишемо коротко: this.root!
    this.ecoNewsLink = this.root.getByRole('link', { name: /eco news|еко новини/i });
    this.eventsLink = this.root.getByRole('link', { name: /events|події/i });
    this.placesLink = this.root.getByRole('link', { name: /places|карта/i });
    this.aboutUsLink = this.root.getByRole('link', { name: /about us|про нас/i });
    this.myCabinetLink = this.root.getByRole('link', { name: /my space|мій кабінет/i });
    this.ubsCourierLink = this.root.getByRole('link', { name: /ubs courier|ubs кур'єр/i });
    
    this.signInButton = this.root.getByRole('button', { name: /sign in|увійти/i });
    this.signUpButton = this.root.getByRole('button', { name: /sign up|зареєструватися/i });

    this.languageSwitcherArrow = this.root.getByAltText('language switcher'); 
    this.enLanguageOption = page.getByRole('option', { name: /english|англійська/i });
    this.uaLanguageOption = page.getByRole('option', { name: /ukrainian|українська/i });
  }

  // 3. МЕТОДИ-ДІЇ: Що робот вміє робити з цим хедером
  async openSignInModal() {
    await this.signInButton.click();
  }

  async openSignUpModal() {
    await this.signUpButton.click();
  }

  async navigateToEcoNews() {
    await this.ecoNewsLink.click();
  }

  // Наш новий крутий метод для перемикання мови:
  async changeLanguage(lang: 'en' | 'ua') {
    await this.languageSwitcherArrow.click(); // 1. Клікнули на стрілочку

    if (lang === 'en') {
      await this.enLanguageOption.click();   // 2а. Клікнули на англійську
    } else {
      await this.uaLanguageOption.click();   // 2б. Або клікнули на українську
    }
  }
}