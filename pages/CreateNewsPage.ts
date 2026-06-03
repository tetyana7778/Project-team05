import { Locator, Page } from '@playwright/test';
import { BaseComponent } from './base.component';

export class CreateNewsPage extends BaseComponent {
  // ── Існуючі локатори (виправлені під реальний DOM) ─────────────────────────
  readonly titleInput: Locator;

  // Теги — в DOM це <button>, не <a>
  readonly newsTag: Locator;
  readonly eventsTag: Locator;
  readonly educationTag: Locator;
  readonly initiativesTag: Locator;
  readonly adsTag: Locator;

  readonly sourceInput: Locator;
  readonly imageDropZone: Locator;
  readonly contentArea: Locator;

  // Кнопки дій
  readonly cancelButton: Locator;
  readonly previewButton: Locator;
  readonly publishButton: Locator;
  readonly applyButton: Locator;
  readonly logoutButton: Locator;
  readonly errorMessage: Locator;
  readonly contentErrorMessage: Locator;
  readonly sourceErrorMessage: Locator;

  // ── Нові локатори для TC-01, TC-02, TC-03 ─────────────────────────────────
  /** Лічильник символів Title: елемент що показує "0/170" */
  readonly titleCounter: Locator;
  /** Поле Author (параграф з текстом "Author: ...") */
  readonly authorField: Locator;
  /** Поле Date (параграф з текстом "Date: ...") */
  readonly dateField: Locator;
  /**
   * Описовий параграф Content-поля: "Must be minimum 20 and maximum 63 206 symbols"
   * Використовується в TC-01 як підтвердження наявності секції Main Text
   */
  readonly contentDescription: Locator;

  constructor(page: Page, root: Locator) {
    super(page, root);

    this.titleInput = this.root.locator('[formcontrolname="title"]');

    // Теги — реальний DOM: <button> всередині generic[ref=e65]
    this.newsTag = this.root.getByRole('button', { name: 'News', exact: true });
    this.eventsTag = this.root.getByRole('button', { name: 'Events', exact: true });
    this.educationTag = this.root.getByRole('button', { name: 'Education', exact: true });
    this.initiativesTag = this.root.getByRole('button', { name: 'Initiatives', exact: true });
    this.adsTag = this.root.getByRole('button', { name: 'Ads', exact: true });

    this.sourceInput = this.root.locator('[formcontrolname="source"]');
    this.imageDropZone = this.root.locator('.text-wrapper');
    this.contentArea = this.root.locator('.ql-editor');

    this.cancelButton = this.root.locator("//button[@class='tertiary-global-button']");
    this.previewButton = this.root.getByRole('button', { name: /переглянути|preview/i });
    this.publishButton = this.root.getByRole('button', { name: /опублікувати|publish/i });
    this.applyButton = this.root.getByRole('button', { name: /застосувати|apply/i });
    this.logoutButton = this.root.getByRole('button', { name: /вийти|sign out/i });
    this.errorMessage = page.locator('app-drag-and-drop p.warning-color');
    this.contentErrorMessage = this.root.locator('p.field-info.warning');
    this.sourceErrorMessage = this.root.locator('span.field-info.warning');

    // Title counter
    this.titleCounter = this.root.locator('//span[@class="field-info"]');

    // Author і Date — параграфи вигляду "Author: Тестовий юзер" / "Date: May 31, 2026"
    this.authorField = this.root.locator('p').filter({ hasText: /^Author:/i });
    this.dateField = this.root.locator('p').filter({ hasText: /^Date:/i });

    // Описовий текст поля Content
    this.contentDescription = this.root.locator('p').filter({ hasText: /minimum 20.*maximum 63/i });
  }

  // ── Допоміжні методи ──────────────────────────────────────────────────────

  /**
   * Перевіряє чи тег активний.
   * Сайт додає клас на сам <button> або на його батьківський елемент.
   * Перевіряємо aria-pressed або клас 'active'/'selected' на кнопці.
   */
  async isTagActive(tagLocator: Locator): Promise<boolean> {
    const ariaPessed = await tagLocator.getAttribute('aria-pressed');
    if (ariaPessed !== null) return ariaPessed === 'true';

    const classes = await tagLocator.getAttribute('class') ?? '';
    return classes.includes('active') || classes.includes('selected');
  }

  /**
   * Повертає кількість активних тегів.
   * Шукає кнопки з aria-pressed="true" або класом active/selected
   * серед п'яти тегових кнопок.
   */
  async getSelectedTagsCount(): Promise<number> {
    const tagNames = ['News', 'Events', 'Education', 'Initiatives', 'Ads'];
    let count = 0;
    for (const name of tagNames) {
      const btn = this.root.getByRole('button', { name, exact: true });
      if (await this.isTagActive(btn)) count++;
    }
    return count;
  }
}