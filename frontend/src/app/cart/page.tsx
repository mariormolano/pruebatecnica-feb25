"use client";
import { useEffect, useState } from "react";
import { useStore } from "exome/react";
import { getCart, deleteCart } from "@/services/productsService";
import CartCard from "@/components/CartCard/CartCard";
import { Product } from "@/interfaces/products";
import { cartStore } from "@/store/cartStore";

const CartPage: React.FC = () => {
  const { setTotalItems } = useStore(cartStore);
  const [ cart, setCart ] = useState<Product[]>([]);
  const [ total, setTotal ] = useState<number>(0);

  useEffect(() => {
    getCart().then((cart) => {
      console.log(cart);
      let subTotal = 0;
      cart.forEach((product) => {
        subTotal += product.price;
      });
      console.log(subTotal);

      setTotalItems(cart.length);
      setTotal(subTotal);
      setCart(cart);
    });
  }
    , []);

  const handleDeleteCart = async () => {
    const response = await deleteCart();
    setTotalItems(response.length);
    setCart([]);
    setTotal(0);
    console.log(response);
  }

  return (
    <div className="flex flex-col items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold text-center">Cart</h1>
      <div className="flex flex-col gap-4 sm:grid-cols-2 lg:grid-cols-3">
        { cart.map((product, index) => (
          <CartCard key={ index } { ...product } />
        )) }
      </div>
      <div className="flex flex-col gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <h2>Total: { total }</h2>
      </div>
      <button onClick={ handleDeleteCart }>Vaciar Carro</button>
    </div>
  );
};

export default CartPage;

