/**
 * This file defines helper functions for the application.
 * It sets up the low level helper functions for the tests.
 * The helper functions can be used in the test files or Page classes to perform common tasks and operations.
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
