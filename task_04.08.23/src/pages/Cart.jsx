import React, { useState } from "react";

import "../styles/Cart.scss";

import ProductList from "../components/ProductList";
const Cart = ({
  productList,
  loading,
  handleFavoritesAddRemove,
  handleCartAddRemove,
  cart,
  favorites,
}) => {
  return (
    <div className="cart  container">
      <h1>Cart</h1>
      <div className="products-container">
        <ProductList
          favorites={favorites}
          handleFavoritesAddRemove={handleFavoritesAddRemove}
          cart={cart}
          dataToList={cart}
          handleCartAddRemove={handleCartAddRemove}
        />
      </div>
    </div>
  );
};

export default Cart;
