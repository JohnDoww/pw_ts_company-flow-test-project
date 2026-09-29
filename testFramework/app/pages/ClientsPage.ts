/**
 * This file defines the ClientsPage class, which represents the clients page of the application.
 */
import { step } from '../../utils/stepDecorator';
import { MainPage } from './MainPage.abstract';
import { ClientsTable } from '../components/tables/ClientsTable';
import { NewClientForm } from '../components/forms/NewClientForm';
import test, { Locator } from '@playwright/test';

export class ClientsPage extends MainPage {
  private table: ClientsTable['locators'] = new ClientsTable(this.page).locators;
  private newClientForm: NewClientForm['locators'] = new NewClientForm(this.page).locators;

  @step('Open the Clients page')
  async open(): Promise<ClientsTable['locators'] > {
    await this.goToUrl(this.urls.clients);
    await this.loaded();
    return this.table;
  }

  @step('Clients page is loaded')
  async loaded(): Promise<void> {
    await this.page.waitForLoadState('load');
    await this.table.body.waitFor();
  }

  async createNewClient(orgId: string, userName: string, mockOrgData?: boolean): Promise<void> {
    await test.step(`Create new client with orgId: ${orgId} and userName: ${userName},${mockOrgData ? ' mock data' : ''} `, async () => {
      await this.table.NewClientButton.click();
      await this.newClientForm.form.waitFor();
      await this.newClientForm.organizationNumberInput.fill(orgId);

      if (mockOrgData) {
        const urlToMock = this.urls.thirdParty.fetchOrgData + '/' + orgId;
        const waitForResponseToMock = this.helper.mockApiResponse(
          urlToMock,
          `orgData_${orgId}.json`,
        );
        await this.newClientForm.fetchOrgDataButton.click();
        await waitForResponseToMock;
      } else {
        await this.newClientForm.fetchOrgDataButton.click();
      }
      await this.newClientForm.nameInput.fill(userName);

      await this.newClientForm.saveButton.click();

      await this.newClientForm.form.waitFor({ state: 'hidden' });
      await this.notifications.locators.clientSaved.waitFor();
    });
  }

  @step('Search for client in the table')
  async findClientInTheTable(clientName: string): Promise<Locator> {
    await this.page.waitForLoadState('load');
    await this.table.tableRows.first().waitFor();
    while ((await this.page.getByText(clientName).isVisible()) === false) {
      if (await this.table.navigationBtns.nextPageBtn.isDisabled()) {
        throw new Error(`Client with name "${clientName}" not found in the table`);
      }
      await this.table.tableRows.first().waitFor();
      await this.table.navigationBtns.nextPageBtn.click();
    }
    return this.table.tableRows.getByText(clientName);
  }
}
