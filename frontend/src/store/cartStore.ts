import { Exome } from "exome";

class CartStore extends Exome {
  public totalItems: number = 0;

  setTotalItems(item: number) {
    this.totalItems = item;
  }
}

export const cartStore = new CartStore();