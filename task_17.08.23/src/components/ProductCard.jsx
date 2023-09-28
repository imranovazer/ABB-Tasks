import React, { Component } from "react";
import Start from "../assets/Start";
import { useSelector } from "react-redux";
const Card = (props) => {
  const cart = useSelector((state) => state.cart);
  const favorites = useSelector((state) => state.favorites);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.text}</p>
        <div className="d-flex justify-content-between align-items-center">
          {cart.find((item) => item.id == props.id) ? (
            <button
              href="#"
              className="btn btn-danger"
              onClick={props.handleAddToCardClick}
            >
              Remove from cart
            </button>
          ) : (
            <button
              data-testid={props.testId ? props.testId : null}
              href="#"
              className="btn btn-primary"
              onClick={props.handleAddToCardClick}
            >
              Add to cart
            </button>
          )}
          <Start
            onClick={props.handleAddToFavorites}
            color={favorites.find((item) => item.id == props.id) ? true : false}
          />
        </div>
      </div>
    </div>
  );
};
export default Card;
