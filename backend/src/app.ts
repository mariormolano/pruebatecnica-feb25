import express from "express";
import { getProducts } from "./products/productsController";
import { getCart, addProductToCart, resetCart } from "./cart/cartController";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: ["http://localhost:3000", process.env.FRONTEND_URL],
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", getProducts);

app.get("/cart", getCart);
app.post("/cart", addProductToCart);
app.delete("/cart", resetCart);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
