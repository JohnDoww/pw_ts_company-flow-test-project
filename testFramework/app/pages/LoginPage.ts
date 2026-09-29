/**
 * This file defines the LoginPage class, which represents the login page of the application.
 */
import { step } from '../../utils/stepDecorator';
import { MainPage } from './MainPage.abstract';
import { LoginForm } from '../components/forms/loginForm';

export class LoginPage extends MainPage {
  private loginForm: LoginForm['locators'] = new LoginForm(this.page).locators;

  @step('Open the Login page')
  async open(): Promise<void> {
    await this.page.goto(this.urls.login);
    await this.loaded();
  }

  @step('Login page is loaded')
  async loaded(): Promise<void> {
    await this.page.waitForLoadState('load');
    await this.loginForm.usernameInput.waitFor({ state: 'visible' });
  }

  @step('Pass login form')
  async passLoginForm(email: string, password: string): Promise<void> {
    await this.page.waitForLoadState('load');
    await this.loginForm.usernameInput.fill(email);
    await this.loginForm.passwordInput.fill(password);
    await this.loginForm.submitButton.click();
    await this.page.waitForLoadState('load');
  }
}
