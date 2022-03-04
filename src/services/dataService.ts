import httpClient from "../httpClient";
import CardData from "../models/CardData";

class DataService {
  public async getAnimalsData(): Promise<CardData[]> {
    const response = await httpClient.get("/animals/rand/9");
    return response.data as CardData[];
  }
}

export default new DataService();
