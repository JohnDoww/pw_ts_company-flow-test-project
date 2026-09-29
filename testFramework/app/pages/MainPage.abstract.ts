/**
 * This file defines the abstract class MainPage, which serves as a class for all page objects in the application.
 * It extends the BaseClass and provides abstract methods for opening, loading pages and common actions which can be executed from every page.
 * Subclasses of MainPage must implement the open and loaded methods to define specific behavior for each page.
 */

import { BaseClass } from '../BaseClass';
import { LoginForm } from '../components/forms/loginForm';
import { HeaderMainNavigationBar } from '../components/navigationBars/HeaderMainNavigationBar';

export abstract class MainPage extends BaseClass {
  abstract open(...args: unknown[]): Promise<void>;
  abstract loaded(...args: unknown[]): Promise<void>;
  protected baseHeader = new HeaderMainNavigationBar(this.page);

  async logout(): Promise<LoginForm['locators']> {
    await this.baseHeader.locators.userIcon.click();
    await this.baseHeader.locators.logOutOption.click();

    return new LoginForm(this.page).locators;
  }
}
