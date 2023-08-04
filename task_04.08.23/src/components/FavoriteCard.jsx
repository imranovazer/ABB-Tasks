import React, { Component } from "react";
import Start from "../assets/Start";
const FavoriteCard = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <Start
            onClick={props.handleAddToFavorites}
            color={
              props.favorites.find((item) => item.id == props.id) ? true : false
            }
          />
        </div>
      </div>
    </div>
  );
};
export default FavoriteCard;
