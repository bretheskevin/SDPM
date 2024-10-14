import nodeFetch from 'node-fetch';

export class ApiService {
  static BASE_URL = "";

  static async get(endpoint: string, options: RequestInit = {}): Promise<any> {
    const response = await this.fetch(endpoint, { ...options, method: 'GET' });
    return response.json();
  }

  static async post(endpoint: string, data: any, options: RequestInit = {}): Promise<any> {
    const response = await this.fetch(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async put(endpoint: string, data: any, options: RequestInit = {}): Promise<any> {
    const response = await this.fetch(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async delete(endpoint: string, options: RequestInit = {}): Promise<any> {
    const response = await this.fetch(endpoint, { ...options, method: 'DELETE' });
    return response.json();
  }

  private static async fetch(endpoint: string, options: RequestInit = {}): Promise<Response> {
    const url = this.BASE_URL + endpoint;
    const mergedOptions: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    if (typeof window === 'undefined') {
      // Server-side: use node-fetch
      return nodeFetch(url, mergedOptions) as unknown as Response;
    } else {
      // Client-side: use native fetch
      return fetch(url, mergedOptions);
    }
  }
}
