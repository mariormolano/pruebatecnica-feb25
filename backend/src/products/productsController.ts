import { Request, Response } from "express";
import { products } from "./productsMockup";

export const getProducts = (req: Request, res: Response) => {
  res.json(products);
};