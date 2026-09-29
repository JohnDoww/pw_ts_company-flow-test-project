/**
 * This file defines the ServiceExample class, which represents example service.
 * It extends the BaseService class and provides specific implementations for making requests.
 */

import { BaseService } from './BaseService.abstract';

export class ServiceExample extends BaseService {
  private readonly serviceUrl: string = this.urls.home + '/example';

  isObjectMatchNeededResponseType(obj: any): boolean {
    throw new Error(`ServiceExample: Method not implemented yet.`);

    // Implement the logic to check if the object matches the expected response type
    return false;
  }

  async getRequest(options?: { params?: string; headers?: {} }): Promise<void> {
    const { params, headers } = options || {};
    const url = params ? `${this.serviceUrl}/${params}` : this.serviceUrl;
    const response = await this.getRequestBase(url, headers);

    const body = await response.json();
    throw new Error(`ServiceExample: GET Method not implemented yet.`);
  }

  async postRequest(options?: { params?: string; headers?: {}; body?: {} }): Promise<void> {
    const { params, headers, body } = options || {};
    const url = params ? `${this.serviceUrl}/${params}` : this.serviceUrl;

    const response = await this.postRequestBase(url, headers, body);

    throw new Error(`ServiceExample: POST Method not implemented yet.`);
  }
}
