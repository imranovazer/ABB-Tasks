import React from "react";

import ProductList from "../components/ProductList";
const Favorites = ({
  productList,
  loading,
  handleFavoritesAddRemove,
  handleCartAddRemove,
  cart,
  favorites,
}) => {
  return (
    <div className="app container">
      <h1>Favorites</h1>
      <div className="products-container">
        <ProductList
          favorites={favorites}
          handleFavoritesAddRemove={handleFavoritesAddRemove}
          cart={cart}
          dataToList={favorites}
          handleCartAddRemove={handleCartAddRemove}
        />
      </div>
    </div>
  );
};

export default Favorites;
