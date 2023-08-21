import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addRemoveFavorite } from "../redux/actions/favoriteActions";
import ProductList from "../components/ProductList";
const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="app container">
      <h1>Favorites</h1>
      <div className="products-container">
        <ProductList dataToList={favorites} />
      </div>
    </div>
  );
};

export default Favorites;
