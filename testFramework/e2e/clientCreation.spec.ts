import { test } from '@playwright/test';
import { AppPages } from '../app/pages/AppPages';
import { users } from '.././utils/data/users';


test.describe('Client creation', () => {
  
    test(`Create new client`, async ({ page }) => {
      const appPages = new AppPages(page);

      const user = users.admin;
      await appPages.loginPage.open();
      await appPages.loginPage.passLoginForm(user.email, user.password);
      await appPages.clientsPage.open();
      await appPages.clientsPage.createNewClient();
    });
  
});
