import { Request, Response } from "express";
import { Product } from "@/intefaces/products";

const CartProducts: Product[] = [];

export const getCart = (req: Request, res: Response) => {
  res.json(CartProducts);
};

export const addProductToCart = (req: Request, res: Response) => {
  const reqProducts: Product[] = req.body;

  if (!Array.isArray(reqProducts)) {
    res.status(400).json({ message: "Invalid request" });
  } else {
    CartProducts.push(...reqProducts);
    res.json(CartProducts);
  }
};

export const resetCart = (req: Request, res: Response) => {
  CartProducts.length = 0;
  res.json(CartProducts);
};
