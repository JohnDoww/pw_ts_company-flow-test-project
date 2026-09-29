/**
 * BaseComponent abstract class which will be implemented by every Component class.
 * It will force every child class to implement locators{}, so it can be accessible for the Page classes.
 */


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
