import { createContext, useEffect, useState } from "react";

export const productContext = createContext();

export default function MainContext({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const globalObj = { products, setProducts, cart, setCart };

  return (
    <productContext.Provider value={globalObj}>
      {children}
    </productContext.Provider>
  );
}
