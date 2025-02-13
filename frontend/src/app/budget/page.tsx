"use client";
import { useEffect, useRef, useState } from "react";
import { useStore } from "exome/react";
import { getCart } from "@/services/productsService";
import { findBestCombination } from "@/util/findBestCombination";
import { Product } from "@/interfaces/products";
import CartCard from "@/components/CartCard/CartCard";
import { cartStore } from "@/store/cartStore";


const BudgetPage = () => {
  const { setTotalItems, totalItems } = useStore(cartStore);
  const [ bestCombination, setBestCombination ] = useState<Product[]>([]);
  const [ cart, setCart ] = useState<Product[]>([]);
  const [ total, setTotal ] = useState<number>(0);
  const budget = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getCart().then((cart) => {
      setTotalItems(cart.length);
      setCart(cart);
    });
  }, [ totalItems ]);

  const handleCalculate = () => {
    if (budget.current) {
      const budgetBest = findBestCombination(cart, budget.current.value ? parseInt(budget.current.value) : 0);
      console.log(budgetBest);
      let semiTotal = 0;
      budgetBest.map((product) => {
        semiTotal += product.price;
      });
      setTotal(semiTotal);
      setBestCombination(budgetBest);
    }
  }

  return (
    <div className="flex flex-col items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold text-center">Presupuesto</h1>
      <div className="flex flex-col align-middle gap-4 sm:grid-cols-2 lg:grid-cols-3">
        { bestCombination.map((product, index) => (
          <CartCard key={ index } { ...product } />
        )) }
        <p className="flex justify-center">Total { total }</p>
      </div>
      <label htmlFor="budgetValue">Valor del presupuesto:
      </label>
      <input ref={ budget } type="text" name="budgetValue" className="placeholder: text-black" />
      <button onClick={ handleCalculate }>Calcular</button>
    </div>
  );


}

export default BudgetPage;