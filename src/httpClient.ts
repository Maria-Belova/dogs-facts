import axios, { AxiosInstance } from "axios";

export class HttpClient {
  private readonly API_URL = "https://zoo-animal-api.herokuapp.com";
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      withCredentials: false,
      baseURL: this.API_URL,
    });
  }

  public async get(url: string): Promise<any> {
    return await this.client.get(url);
  }
}

export default new HttpClient();