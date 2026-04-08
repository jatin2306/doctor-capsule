import { config } from "../../core/config/config";

export class ApiEndpoint {
  static get baseUrl() {
    return `${config.API_URL_1}/api`;
  }

  static get register() {
    return `${this.baseUrl}/auth/register/`;
  }
}
