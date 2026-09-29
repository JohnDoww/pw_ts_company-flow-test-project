/**
 * This file defines helper functions for the application.
 * It imports the necessary modules and sets up the helper functions for the BDD tests.
 * The helper functions can be used in the BDD step definitions to perform common tasks and operations.
 */

/// <reference types="node" />
import { Page } from '@playwright/test';
import path from 'path';

export class FunctionHelpers {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  private folderWithMockData = path.join(__dirname, '../data/mock-responses');
  async mockApiResponse(urlMock: string, fileName: string) {
    const filePath = path.join(this.folderWithMockData, fileName);

    this.page.route(urlMock, (route) =>
      route.fulfill({
        status: 200,
        path: filePath,
        headers: { 'access-control-allow-origin': '*' },
      }),
    );

    return () => this.page.waitForResponse(urlMock);
  }
}
