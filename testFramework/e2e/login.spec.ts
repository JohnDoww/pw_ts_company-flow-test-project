import { test, expect } from '../fixtures/baseFixture';
import { users } from '../utils/data/users';

const testData = [
  { user: users.accountant, role: 'Accountant' },
  { user: users.admin, role: 'Administrator' },
];

test.describe('Login', () => {
  for (const { user, role } of testData) {
    test(`${role} user can log out after logging in`, async ({ appPages, urls }) => {
      await appPages.loginPage.open();
      const dashboardCards = await appPages.loginPage.passLoginForm(user.email, user.password);
      await appPages.dashboardPage.switchLanguage('English');
      await expect
        .soft(dashboardCards.header, `Dashboard header is visible`)
        .toHaveText('Dashboard');

      const loginFormLocators = await appPages.dashboardPage.logout();
      await expect.soft(loginFormLocators.usernameInput, `Login form is visible`).toBeVisible();
      expect.soft(appPages.page, `User redirected to login page`).toHaveURL(urls.login);
    });
  }
});
