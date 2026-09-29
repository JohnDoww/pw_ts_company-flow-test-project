/**
 *
 */

import { BaseComponent } from '../baseComponent.abstract';

export class HeaderMainNavigationBar extends BaseComponent {
  readonly locators = {
    userIcon: this.page.locator('account_circle'),
    logOutOption: this.page.locator('[role="menuitem"] [data-mat-icon-type="font"]'),
  };
}
