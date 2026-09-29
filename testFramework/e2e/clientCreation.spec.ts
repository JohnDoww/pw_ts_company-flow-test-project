import { expect, test } from '@playwright/test';
import { AppPages } from '../app/pages/AppPages';
import { users } from '.././utils/data/users';
import { faker } from '@faker-js/faker';

test.describe('Client creation', () => {
  test(`Create new client`, async ({ page }) => {
    const clientName = faker.company.name() + '__' + faker.number.int({ max: 1000 });

    const appPages = new AppPages(page);
    const user = users.admin;
    await appPages.loginPage.open();
    await appPages.loginPage.passLoginForm(user.email, user.password);

    await appPages.clientsPage.open();
    await appPages.clientsPage.createNewClient('971403403', clientName, true);

    const neededClient = await appPages.clientsPage.findClientInTheTable(clientName);

    await expect(neededClient, `Client "${clientName}" appears in the table`).toBeVisible();
  });
});
