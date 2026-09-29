import { test as base, expect } from '@playwright/test';
import { AppPages } from '../app/pages/AppPages';
import { users } from '../utils/data/users';
import { urls } from '../utils/data/urls';

type Fixtures = {
  userRole: keyof typeof users;            
  users: typeof users;
  urls: typeof urls;
  appPages: AppPages;
  loggedInApp: AppPages;
};

export const test = base.extend<Fixtures>({
  userRole: ['admin', { option: true }],

  users: async ({}, use) => {
    await use(users);
  },

  urls: async ({}, use) => {
    await use(urls);
  },

  appPages: async ({ page }, use) => {
    await use(new AppPages(page));
  },

  loggedInApp: async ({ appPages, userRole }, use) => {
    const user = users[userRole];
    await appPages.loginPage.open();
    await appPages.loginPage.passLoginForm(user.email, user.password);
    await use(appPages);
  },
});

export { expect };