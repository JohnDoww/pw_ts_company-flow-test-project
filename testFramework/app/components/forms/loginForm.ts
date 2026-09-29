/**
 * 
 */

import { BaseComponent } from "../baseComponent.abstract";


export class LoginForm extends BaseComponent {

    readonly locators = {
        usernameInput: this.page.getByLabel('Email'),
        passwordInput: this.page.getByLabel('Password'),
        submitButton: this.page.getByRole('button', { name: 'Sign in' })
    };

}
