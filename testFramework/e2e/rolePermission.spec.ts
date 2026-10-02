import { test, expect } from '../fixtures/baseFixture';
import { faker } from '@faker-js/faker';

test.describe('Role permissions', () => {
  test.use({ userRole: 'accountant' });

  test(`Accountant: Can't create new clients`, async ({ loggedInApp, urls }) => {
    const clientsTableLocators = await loggedInApp.clientsPage.open();
    await expect
      .soft(clientsTableLocators.NewClientButton, `New Client button is not visible for Accountant`)
      .not.toBeVisible();

    await loggedInApp.clientsPage.goToUrl(urls.newClient);
    await loggedInApp.dashboardPage.loaded();
    await expect(
      loggedInApp.page,
      `Accountant is redirected to the dashboard page when trying to access the new client page`,
    ).toHaveURL(urls.dashboard);
  });
});
