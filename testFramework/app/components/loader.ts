import { BaseComponent } from './BaseComponent.abstract';

export class Loader extends BaseComponent {
  readonly locators = {
    body: this.page.locator('[class="mdc-circular-progress__indeterminate-container"]'),
  };
}
