/**
 *
 */

import { BaseComponent } from '../BaseComponent.abstract';

export class LoginForm extends BaseComponent {
  readonly locators = {
    usernameInput: this.page.locator('[autocomplete="username"]'),
    passwordInput: this.page.locator('[autocomplete="current-password"]'),
    submitButton: this.page.getByRole('button', { name: 'Sign in' }),
  };
}
