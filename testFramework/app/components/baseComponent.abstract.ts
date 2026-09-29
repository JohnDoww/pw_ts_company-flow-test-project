import { Locator, Page } from '@playwright/test';

export type LocatorTree = {
  [key: string]: Locator | LocatorTree;
};

export abstract class BaseComponent {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  abstract locators: LocatorTree;
}
