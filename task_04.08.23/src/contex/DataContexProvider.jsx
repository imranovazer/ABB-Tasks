import React, { createContext, useEffect, useState } from "react";

export const dataContex = createContext(null);

function DataContexProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
      const favoritesFromLocalStorage = JSON.parse(
        localStorage.getItem("favorites")
      );

      if (cartFromLocalStorage) {
        setCart(cartFromLocalStorage);
      }
      if (favoritesFromLocalStorage) {
        setFavorites(favoritesFromLocalStorage);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <dataContex.Provider value={{ cart, favorites, setCart, setFavorites }}>
      {children}
    </dataContex.Provider>
  );
}

export default DataContexProvider;
