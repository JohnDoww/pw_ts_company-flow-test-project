/**
 * New client form (/clients/new)
 */

import { BaseComponent } from '../baseComponent.abstract';

export class NewClientForm extends BaseComponent {
  private form = this.page.locator('app-client-form form');

  readonly locators = {
    form: this.form,
    title: this.page.locator('app-client-form mat-card-title'),
    organizationNumberInput: this.form.locator('input[formcontrolname="organizationNumber"]'),
    fetchFromBrregButton: this.form.locator('.org-row button[mat-stroked-button]'),
    nameInput: this.form.locator('input[formcontrolname="name"]'),
    categorySelect: this.form.locator('mat-select[formcontrolname="customerCategory"]'),
    statusSelect: this.form.locator('mat-select[formcontrolname="status"]'),
    addressInput: this.form.locator('input[formcontrolname="line1"]'),
    postalCodeInput: this.form.locator('input[formcontrolname="postnummer"]'),
    placeInput: this.form.locator('input[formcontrolname="poststed"]'),
    countryInput: this.form.locator('input[formcontrolname="land"]'),
    emailInput: this.form.locator('input[formcontrolname="email"]'),
    telephoneInput: this.form.locator('input[formcontrolname="telephone"]'),
    hourlyRateInput: this.form.locator('input[formcontrolname="hourlyRateNok"]'),
    tagsInput: this.form.locator('input[formcontrolname="tags"]'),
    selectOptions: this.page.locator('.cdk-overlay-container mat-option'),
    cancelButton: this.form.locator('.form-actions button[type="button"]'),
    saveButton: this.form.locator('.form-actions button[type="submit"]'),
  };
}