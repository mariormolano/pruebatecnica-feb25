"use client";
import { Product } from "@/interfaces/products";

export const orderByPrice = (products: Product[]): Product[] => {
  return products.sort((a, b) => a.price - b.price);
};

export const findBestCombination = (
  products: Product[],
  budget: number
): Product[] => {
  const sortedProducts = orderByPrice(products);
  const result: Product[] = [];
  let ProductPrices = 0;

  sortedProducts.map((product) => {
    ProductPrices += product.price;
    if (ProductPrices <= budget) {
      result.push(product);
      console.log(ProductPrices);
    }
  });

  return result;
};
