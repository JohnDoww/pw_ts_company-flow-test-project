/**
 * This file is used to define the AppPages class, which serves as a central point for accessing different page objects in the application.
 * It imports the necessary page classes and initializes them in the constructor.
 * The AppPages class can be extended to include additional pages as needed.
 */

import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { ClientsPage } from "./ClientsPage";
import { DashboardPage } from "./DashboardPage";

export class AppPages {
  readonly page: Page;
  readonly dashboardPage: DashboardPage;
  readonly loginPage: LoginPage;
  readonly clientsPage: ClientsPage;

  constructor(page: Page) {
    this.page = page;
    this.dashboardPage = new DashboardPage(page);
    this.loginPage = new LoginPage(page);
    this.clientsPage = new ClientsPage(page);

  }
}
