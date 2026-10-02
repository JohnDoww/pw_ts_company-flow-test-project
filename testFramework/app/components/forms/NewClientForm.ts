import { BaseComponent } from '../BaseComponent.abstract';

export class NewClientForm extends BaseComponent {
  private form = this.page.locator('app-client-form form');

  readonly locators = {
    form: this.form,
    organizationNumberInput: this.form.locator('input[formcontrolname="organizationNumber"]'),
    fetchOrgDataButton: this.form.locator('.org-row button[mat-stroked-button]'),
    nameInput: this.form.locator('input[formcontrolname="name"]'),
    saveButton: this.form.locator('.form-actions button[type="submit"]'),
  };
}
