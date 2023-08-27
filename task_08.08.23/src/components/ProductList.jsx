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
const ProductList = ({ dataToList }) => {
  const modal = useSelector((state) => state.modal);
  const [productAddToCart, setProductAddToCart] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

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
  const ifInCart = () => {
    const inCart = cart.find((item) => item.id == productAddToCart.id);

    return inCart ? true : false;
  };

  return (
    <div className="app container">
      <div className="products-container  ">
        {dataToList?.map((item) => {
          return (
            <Card
              name={item.name}
              image={item.imagePath}
              id={item.id}
              key={item.id}
              handleAddToFavorites={() => handleAddToFavorites(item)}
              handleAddToCardClick={() => handleAddToCardClick(item)}
            />
          );
        })}
      </div>

      {modal && (
        <Modal
          header={ifInCart() ? "Remove from cart" : "Add to cart"}
          closeButton={true}
          text="Please confirm operation."
          actions={
            <Button
              backgroundColor={"orange"}
              text={ifInCart() ? "Remove " : "Add"}
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
