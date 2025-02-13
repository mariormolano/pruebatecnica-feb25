'use client'
import Link from "next/link";
import { useStore } from "exome/react";
import { cartStore } from "@/store/cartStore";

const NavBar = () => {
  const { totalItems } = useStore(cartStore);
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <ul className="flex gap-4">
        <li className="font-bold">
          <Link href="/">Home</Link>
        </li>
        <li className="font-bold">
          <Link href="/budget">Presupuesto</Link>
        </li>
        <li className="font-bold">
          <Link href="/cart">Carro [{ totalItems }] </Link>
        </li>
      </ul>
    </nav>
  );
};


export default NavBar;