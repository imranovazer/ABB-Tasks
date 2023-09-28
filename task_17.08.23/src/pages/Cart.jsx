import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import "../styles/Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { addRemoveCart } from "../redux/actions/cartActions";
import {
  closeModal,
  displayModal,
  toggleModal,
} from "../redux/actions/modalActions";
import CheckoutForm from "../components/Checkout";
import ProductList from "../components/ProductList";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart  container">
      <div className="left">
        <h1>Cart</h1>
        <div className="products-container">
          <ProductList dataToList={cart} />
        </div>
      </div>
      <div className="right">
        <CheckoutForm cart={cart} />
      </div>
    </div>
  );
};

export default Cart;
