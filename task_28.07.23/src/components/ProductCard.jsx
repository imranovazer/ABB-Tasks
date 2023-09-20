import React, { Component } from "react";
import Start from "../assets/Start";

class Card extends Component {
  render() {
    const {
      image,
      name,
      id,
      cart,
      handleAddToCardClick,
      handleAddToFavorites,
      favorites,
    } = this.props;

    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            {cart.find((item) => item.id === id) ? (
              <button
                href="#"
                className="btn btn-danger"
                onClick={handleAddToCardClick}
              >
                Remove from cart
              </button>
            ) : (
              <button
                href="#"
                className="btn btn-primary"
                onClick={handleAddToCardClick}
              >
                Add to cart
              </button>
            )}
            <Start
              onClick={handleAddToFavorites}
              color={favorites.find((item) => item.id === id) ? true : false}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
