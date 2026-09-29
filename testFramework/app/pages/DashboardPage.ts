/**
 * This file defines the HomePage class, which represents the home page of the application.
 * It extends the BasePage class and provides implementations for opening and loading the home page.
 * The HomePage class can be used to interact with the home page in tests.
 */
import { DashboardCards } from '../components/cards/DashboardCards';
import { MainPage } from './MainPage.abstract';

export class DashboardPage extends MainPage {
  private cards: DashboardCards['locators'] = new DashboardCards(this.page).locators;
  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async loaded(): Promise<void> {
    await this.page.waitForLoadState('load');
    await this.cards.header.waitFor({ state: 'visible' });
  }
}
