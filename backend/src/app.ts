import express from "express";
import { getProducts } from "./products/productsController";
import { getCart, addProductToCart, resetCart } from "./cart/cartController";
import bodyParser from "body-parser";

const app = express();
const port = 3001;

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
