/**
 * This file defines the abstract class MainPage, which serves as a class for all page objects in the application.
 * It extends the BaseClass and provides abstract methods for opening, loading pages and common actions which can be executed from every page.
 * Subclasses of MainPage must implement the open and loaded methods to define specific behavior for each page.
 */

import { test } from '@playwright/test';
import { step } from '../../utils/stepDecorator';
import { BaseClass } from '../BaseClass';
import { LoginForm } from '../components/forms/loginForm';
import { HeaderMainNavigationBar } from '../components/navigationBars/HeaderMainNavigationBar';

export abstract class MainPage extends BaseClass {
  abstract open(...args: unknown[]): Promise<void>;
  abstract loaded(...args: unknown[]): Promise<void>;
  protected baseHeader = new HeaderMainNavigationBar(this.page);

  @step('Logout from the application')
  async logout(): Promise<LoginForm['locators']> {
    await this.baseHeader.locators.userIcon.icon.click();
    await this.baseHeader.locators.userIcon.logOutOption.click();

    return new LoginForm(this.page).locators;
  }

  async switchLanguage(desiredLanguage: 'English' | 'Norwegian'): Promise<void> {
    test.step(`Switch language to ${desiredLanguage}`, async () => {
      await this.baseHeader.locators.languageSwitcher.icon.click();

      switch (desiredLanguage) {
        case 'English':
          await this.baseHeader.locators.languageSwitcher.engOption.click();
          break;
        case 'Norwegian':
          await this.baseHeader.locators.languageSwitcher.norOption.click();
          break;
      }
      await this.baseHeader.locators.languageSwitcher.norOption.waitFor({ state: 'hidden' });
      await this.page.waitForLoadState('load');
    });

    
  }


}
