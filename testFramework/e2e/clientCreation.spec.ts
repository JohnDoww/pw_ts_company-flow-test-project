import { test, expect } from '../fixtures/baseFixture';
import { faker } from '@faker-js/faker';

test.describe('Client creation', () => {
  test.use({ userRole: 'admin' });

  test(`Create new client with mock data`, async ({ loggedInApp }) => {
    const clientName = faker.company.name() + '__' + faker.number.int({ max: 1000 });

    await loggedInApp.clientsPage.open();
    await loggedInApp.clientsPage.createNewClient('971403403', clientName, true);

    const neededClient = await loggedInApp.clientsPage.findClientInTheTable(clientName);

    await expect(neededClient, `Client "${clientName}" appears in the table`).toBeVisible();
  });
});
