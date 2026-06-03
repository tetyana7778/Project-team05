import { Locator, Page } from '@playwright/test';

export abstract class BaseComponent {
  constructor(
    public readonly page: Page,
    protected readonly root: Locator
  ) {}

  async isVisible(): Promise<boolean> {
    return this.root.isVisible();
  }
}