import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

import CartCard from "../components/CartCard";
import { useDispatch, useSelector } from "react-redux";
import { addRemoveCart } from "../redux/actions/cartActions";
import {
  closeModal,
  displayModal,
  toggleModal,
} from "../redux/actions/modalActions";
const Cart = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state);
  const [productAddToCart, setProductAddToCart] = useState(null);

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

  return (
    <div className="app container">
      <h1>Cart</h1>
      <div className="products-container">
        {cart &&
          cart.map((item) => {
            return (
              <CartCard
                name={item.name}
                image={item.imagePath}
                cart={cart}
                id={item.id}
                key={item.id}
                handleAddToCardClick={() => handleAddToCardClick(item)}
              />
            );
          })}
      </div>

      {modal && (
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

export default Cart;
