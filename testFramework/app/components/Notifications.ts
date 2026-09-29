/**
 *
 */

import { BaseComponent } from './BaseComponent.abstract';

export class Notifications extends BaseComponent {
  private body = this.page.locator('[matsnackbarlabel]');
  readonly locators = {
    clientSaved: this.body.filter({ hasText: /Client saved|Klient lagret/ }),
  };
}
