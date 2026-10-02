import { BaseComponent } from '../BaseComponent.abstract';

export class DashboardCards extends BaseComponent {
  private body = this.page.locator('app-dashboard');
  readonly locators = {
    header: this.body.locator('h1'),
  };
}
