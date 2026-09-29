/**
 * This file defines the HomePage class, which represents the home page of the application.
 * It extends the BasePage class and provides implementations for opening and loading the home page.
 * The HomePage class can be used to interact with the home page in tests.
 */
import { step } from '../../utils/stepDecorator';
import { DashboardCards } from '../components/cards/DashboardCards';
import { MainPage } from './MainPage.abstract';

export class DashboardPage extends MainPage {
  private cards: DashboardCards['locators'] = new DashboardCards(this.page).locators;
  
  @step('Open Dashboard page')
  async open(): Promise<void> {
    await this.goToUrl(this.urls.dashboard);
    await this.loaded();
  }

  @step('Dashboard page is loaded')
  async loaded(): Promise<void> {
    await this.page.waitForLoadState('load');
    await this.loader.locators.body.waitFor({ state: 'hidden' });
    await this.cards.header.waitFor({ state: 'visible' });
  }
}
