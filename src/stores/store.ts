import { makeAutoObservable } from "mobx";
import CardData from "../models/CardData";
import dataService from "../services/dataService";

export default class Store {
  cardsData: CardData[] = [];
  defaultCardsData: CardData[] = [];
  isLoading: boolean = true;
  isSortButton: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setCardsData(cardsData: CardData[]) {
    this.cardsData = cardsData;
  }

  setDefautCardsData(defaultCardsData: CardData[]) {
    this.defaultCardsData = defaultCardsData;
  }

  setIsloading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setIsSortButton(isSortButton: boolean) {
    this.isSortButton = isSortButton;
  }

  public async getCardsData() {
    try {
      const cardsData = await dataService.getAnimalsData();
      this.setCardsData(cardsData);
      this.setDefautCardsData(cardsData);
      this.setIsloading(false);
    } catch (error) {
      console.log(error);
    }
  }

  public deleteCard(id: number) {
    try {
      const newCardsData = this.cardsData.filter((card) => card.id != id);
      this.setCardsData(newCardsData);
      this.setDefautCardsData(newCardsData);
    } catch (error) {
      console.log(error);
    }
  }

  public changeIsLikedStatus(id: number) {
    try {
      const foundedCardData = this.cardsData.find((card) => card.id == id);
      if (foundedCardData) {
        foundedCardData.isLiked = !foundedCardData.isLiked;
      }
      this.setDefautCardsData(this.cardsData);
    } catch (error) {
      console.log(error);
    }
  }

  public showOnlyLikedCards() {
    try {
      const filteredCards = this.cardsData.filter(
        (card) => card.isLiked == true
      );
      this.setCardsData(filteredCards);
      this.setIsSortButton(!this.isSortButton);
    } catch (error) {
      console.log(error);
    }
  }

  public showAllCards() {
    try {
      this.setCardsData(this.defaultCardsData);
      this.setIsSortButton(!this.isSortButton);
    } catch (error) {
      console.log(error);
    }
  }
}
