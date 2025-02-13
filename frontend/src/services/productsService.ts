"use server";
//"use client";
import { Product } from "@/interfaces/products";

const server = process.env.HOST || "http://localhost:3001";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(server + "/products");
  if (response.ok) {
    return await response.json();
  }
  return [];
};

export const addCart = async (product: Product): Promise<Product[]> => {
  const productAdd: Product[] = [product];
  const response = await fetch(server + "/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productAdd),
  });
  if (response.ok) {
    return await response.json();
  }

  return [];
};

export const getCart = async (): Promise<Product[]> => {
  const response = await fetch(server + "/cart");
  if (response.ok) {
    return await response.json();
  }
  return [];
};

export const deleteCart = async (): Promise<Product[]> => {
  const response = await fetch(server + "/cart", {
    method: "DELETE",
  });
  if (response.ok) {
    return await response.json();
  }
  return [];
};
