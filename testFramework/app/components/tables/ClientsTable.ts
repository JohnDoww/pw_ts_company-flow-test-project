/**
 *
 */

import { BaseComponent } from '../BaseComponent.abstract';

export class ClientsTable extends BaseComponent {
  private body = this.page.locator('[class="mdc-data-table__content"]');
  readonly locators = {
    body: this.body,
    NewClientButton: this.page.getByTestId('new-client-button'),
    tableRows: this.body.getByRole('row'),

    navigationBtns: {
      nextPageBtn: this.page.getByLabel('Next page'),
      previousPageBtn: this.page.getByLabel('Previous page'),
    },
  };
}
