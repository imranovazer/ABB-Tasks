import React, { useState } from "react";

import "../styles/Cart.scss";
import { useDispatch, useSelector } from "react-redux";

import ProductList from "../components/ProductList";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart  container">
      <h1>Cart</h1>
      <div className="products-container">
        <ProductList dataToList={cart} />
      </div>
    </div>
  );
};

export default Cart;
