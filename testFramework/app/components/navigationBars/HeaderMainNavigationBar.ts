/**
 *
 */

import { BaseComponent } from '../BaseComponent.abstract';

export class HeaderMainNavigationBar extends BaseComponent {
  readonly locators = {
    userIcon: {
      icon: this.page.getByText('account_circle'),
      logOutOption: this.page.locator('[role="menuitem"] [data-mat-icon-type="font"]'),
    },
    languageSwitcher: {
      icon: this.page.getByText('language'),
      engOption: this.page.locator('[role="menuitem"]').getByText('English'),
      norOption: this.page.locator('[role="menuitem"]').getByText('Norsk'),
    },
  };
}
