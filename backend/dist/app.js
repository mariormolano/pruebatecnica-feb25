"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsController_1 = require("./products/productsController");
const cartController_1 = require("./cart/cartController");
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const corsOptions = {
    origin: ["http://localhost:3000", process.env.FRONTEND_URL],
};
app.use((0, cors_1.default)(corsOptions));
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/products", productsController_1.getProducts);
app.get("/cart", cartController_1.getCart);
app.post("/cart", cartController_1.addProductToCart);
app.delete("/cart", cartController_1.resetCart);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map