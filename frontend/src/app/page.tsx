'use client';
import { useEffect, useState } from "react";
import { useStore } from "exome/react";
import BasicCard from "@/components/BasicCard/BasicCard";
import { getProducts, getCart } from "@/services/productsService";
import { Product } from "@/interfaces/products";
import { cartStore } from "@/store/cartStore";

const Home: React.FC = () => {
  const {setTotalItems, totalItems} = useStore(cartStore);
  const [ products, setProducts ] = useState<Product[]>([]);
  useEffect(() => {
    getProducts().then((products) => {
      console.log(products);
      setProducts(products);
    });
  }, []);

  useEffect(() => {
    getCart().then((cart) => {
      setTotalItems(cart.length);
    });
  }, [totalItems]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold text-center">Productos</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        { products.map((product) => (
          <BasicCard key={ product.id } { ...product } />
        )) }
      </div>
    </div>
  );
}

export default Home;