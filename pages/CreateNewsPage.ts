import { Locator, Page } from '@playwright/test';
import { BaseComponent } from './base.component';

export class CreateNewsPage extends BaseComponent {
  // 1. Оголошення елементів (твої локатори)
  readonly titleInput: Locator;
  readonly newsTag: Locator;
  readonly eventsTag: Locator;
  readonly initiativesTag: Locator;
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
  constructor(page: Page, root: Locator) {
    super(page, root);

        //this.titleInput = this.root.getByPlaceholder('напр. Кава з собою зі знижкою 20%');
    this.titleInput = this.root.locator('[formcontrolname="title"]');
    // Теги 
    this.newsTag = this.root.locator('a').filter({ hasText: /^новини$|^news$/i });
    this.eventsTag = this.root.locator('a').filter({ hasText: /^події$|^events$/i });
    this.initiativesTag = this.root.locator('a').filter({ hasText: /^ініціативи$|^initiatives$/i });
    
    // Посилання на зовнішнє джерело (необов'язкове)
    //this.sourceInput = this.root.getByPlaceholder('Посилання на зовнішнє джерело');
    this.sourceInput = this.root.locator('[formcontrolname="source"]');
    // Поле для перетягування зображення (необов'язкове)
    this.imageDropZone = this.root.locator('.text-wrapper');
    
    // Поле для опису новини (текстовий редактор)
    this.contentArea = this.root.locator('.ql-editor');

    // Кнопки керування формою
    this.cancelButton = this.root.getByRole('button', { name: /скасувати|cancel/i });
    this.previewButton = this.root.getByRole('button', { name: /переглянути|preview/i });
    this.publishButton = this.root.getByRole('button', { name: /опублікувати|publish/i });
    this.applyButton = this.root.getByRole('button', { name: /застосувати|apply/i });
    this.logoutButton = this.root.getByRole('button', { name: /вийти|sign out/i });
    this.errorMessage = page.locator('app-drag-and-drop p.warning-color');
    this.contentErrorMessage = this.root.locator('p.field-info.warning');
    this.sourceErrorMessage = this.root.locator('span.field-info.warning');
  }
}
