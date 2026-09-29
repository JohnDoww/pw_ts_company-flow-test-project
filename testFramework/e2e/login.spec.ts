import { test, expect } from '@playwright/test';
import { AppPages } from '../app/pages/AppPages';
import { users } from '.././utils/data/users';

const testData = [
  { user: users.accountant, role: 'Accountant', expectedHeader: 'Dashboard' },
  { user: users.admin, role: 'Administrator', expectedHeader: 'Oversikt' },
];

test.describe('Login', () => {
  for (const { user, expectedHeader, role } of testData) {
    test(`${role} user sees the "${expectedHeader}" after log in`, async ({ page }) => {
      const appPages = new AppPages(page);
      await appPages.loginPage.open();
      await appPages.loginPage.passLoginForm(user.email, user.password);
      await expect.soft(page.getByRole('heading', { name: expectedHeader })).toBeVisible();

      const loginFormLocators = await appPages.homePage.logout();
      await expect(loginFormLocators.usernameInput).toBeVisible();
    });
  }
});
