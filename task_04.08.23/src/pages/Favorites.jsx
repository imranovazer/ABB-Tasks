import React, { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

import Card from "../components/ProductCard";
import { fetchData } from "../api";
import { dataContex } from "../contex/DataContexProvider";
import FavoriteCard from "../components/FavoriteCard";
const Favorites = () => {
  const [firstModalOpen, setFirstModalOpen] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [productAddToCart, setProductAddToCart] = useState(null);
  console.log(productAddToCart);
  const { cart, setCart, favorites, setFavorites } = useContext(dataContex);

  const handleAddToCardClick = (item) => {
    setProductAddToCart(item);
    setFirstModalOpen(true);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchData();

        setProductsData(res.products);
      } catch (error) {}
    };
    getData();
  }, []);

  const toggleFirstModal = () => {
    setFirstModalOpen((prevState) => !prevState);
  };

  const handleAddToCartConfirm = () => {
    const isIn = cart.find((item) => item.id == productAddToCart.id);
    if (isIn) {
      setCart((prevState) => {
        const newCart = prevState.filter(
          (item) => item.id !== productAddToCart.id
        );

        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      });

      setFirstModalOpen(false);
    } else {
      setCart((prevState) => {
        const newCart = [...prevState, productAddToCart];

        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      });

      setFirstModalOpen(false);
    }
  };
  const handleAddToFavorites = (favorit) => {
    const isIn = favorites.find((item) => item.id == favorit.id);
    if (isIn) {
      setFavorites((prevState) => {
        const newFavorites = prevState.filter((item) => item.id !== favorit.id);

        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        return newFavorites;
      });
    } else {
      setFavorites((prevState) => {
        const newFavorites = [...prevState, favorit];

        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        return newFavorites;
      });
    }
  };

  return (
    <div className="app container">
      <h1>Favorites</h1>
      <div className="products-container">
        {favorites &&
          favorites.map((item) => {
            return (
              <FavoriteCard
                name={item.name}
                image={item.imagePath}
                cart={cart}
                id={item.id}
                key={item.id}
                favorites={favorites}
                handleAddToFavorites={() => handleAddToFavorites(item)}
                handleAddToCardClick={() => handleAddToCardClick(item)}
              />
            );
          })}
      </div>

      {firstModalOpen && (
        <Modal
          header="Remove from cart"
          closeButton={false}
          text="Plese confir that you want to remove from this item from cart."
          actions={
            <Button
              backgroundColor="blue"
              text="Remove"
              onClick={handleAddToCartConfirm}
            />
          }
          onClose={toggleFirstModal}
        />
      )}
    </div>
  );
};

export default Favorites;
