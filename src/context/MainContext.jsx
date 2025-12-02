import { createContext, useState } from "react";

export const productContext = createContext();

export default function MainContext({ children }) {
  const [products, setProducts] = useState([]);


  const globalObj = { products, setProducts };

  return (
    <productContext.Provider value={globalObj}>
      {children}
    </productContext.Provider>
  );
}
