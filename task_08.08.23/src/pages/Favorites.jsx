import React from "react";

import FavoriteCard from "../components/FavoriteCard";
import { useDispatch, useSelector } from "react-redux";
import { addRemoveFavorite } from "../redux/actions/favoriteActions";
const Favorites = () => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);

  const handleAddToFavorites = (favorit) => {
    dispatch(addRemoveFavorite(favorit));
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
                id={item.id}
                key={item.id}
                favorites={favorites}
                handleAddToFavorites={() => handleAddToFavorites(item)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Favorites;
