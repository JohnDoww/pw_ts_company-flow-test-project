/**
 * This file defines the HomePage class, which represents the home page of the application.
 * It extends the BasePage class and provides implementations for opening and loading the home page.
 * The HomePage class can be used to interact with the home page in tests.
 */
import { MainPage } from './MainPage.abstract';

export class HomePage extends MainPage {
  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async loaded(): Promise<void> {
    await this.page.waitForLoadState('load');
  }
}
