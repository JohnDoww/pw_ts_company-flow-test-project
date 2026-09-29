/**
 * This file defines the ClientsPage class, which represents the clients page of the application.
 */
import { step } from '../../utils/stepDecorator';
import { MainPage } from './MainPage.abstract';
import { ClientsTable } from '../components/tables/ClientsTable';
import { NewClientForm } from '../components/forms/NewClientForm';

export class ClientsPage extends MainPage {
  private table: ClientsTable['locators'] = new ClientsTable(this.page).locators;
  private newClientForm: NewClientForm['locators'] = new NewClientForm(this.page).locators;

  @step('Open the Clients page')
  async open(): Promise<void> {
    await this.page.goto(this.urls.clients);
    await this.loaded();
  }

  @step('Clients page is loaded')
  async loaded(): Promise<void> {
    await this.page.waitForLoadState('load');
    await this.table.body.waitFor();
  }

  @step('Create new client')
  async createNewClient(): Promise<void> {
    await this.table.NewClientButton.click();
    await this.newClientForm.form.waitFor();
  }
}
