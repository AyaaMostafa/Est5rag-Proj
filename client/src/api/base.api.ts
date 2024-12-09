/**
 * This class contain base behavior and data for all HTTP requests
 */

class BaseAPIs {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'http://10.100.102.6:1331';
  }
}

export default BaseAPIs;
