import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import Card from "./ProductCard";

import { useDispatch, useSelector } from "react-redux";
import { addRemoveCart } from "../redux/actions/cartActions";
import { addRemoveFavorite } from "../redux/actions/favoriteActions";
import {
  closeModal,
  displayModal,
  toggleModal,
} from "../redux/actions/modalActions";
const ProductList = () => {
  const { modal } = useSelector((state) => state);
  const [productAddToCart, setProductAddToCart] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const favorites = useSelector((state) => state.favorites);
  const { data, error, loading } = useSelector((state) => state.products);

  const handleAddToCardClick = (item) => {
    setProductAddToCart(item);
    dispatch(displayModal());
  };

  const toggleFirstModal = () => {
    dispatch(toggleModal());
  };

  const handleAddToCartConfirm = () => {
    dispatch(addRemoveCart(productAddToCart));

    dispatch(closeModal());
  };
  const handleAddToFavorites = (favorit) => {
    dispatch(addRemoveFavorite(favorit));
  };

  return (
    <div className="app container">
      <h1>Prodicts list</h1>
      <div className="products-container  ">
        {loading ? (
          <h1>Loading... </h1>
        ) : (
          data?.map((item) => {
            return (
              <Card
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
          })
        )}
      </div>

      {modal && (
        <Modal
          header="Add to cart"
          closeButton={true}
          text="Please confirm that you want add to card this item."
          actions={
            <Button
              backgroundColor="orange"
              text="Add"
              onClick={handleAddToCartConfirm}
            />
          }
          onClose={toggleFirstModal}
        />
      )}
    </div>
  );
};

export default ProductList;
