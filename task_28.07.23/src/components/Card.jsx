import React, { Component } from "react";
import Start from "../assets/Start";
export default class Card extends Component {
  render() {
    return (
      <div class="card" style={{ width: "18rem" }}>
        <img src={this.props.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{this.props.name}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>

          <div className="d-flex justify-content-between align-items-center">
            {this.props.cart.includes(this.props.id) ? (
              <button
                href="#"
                class="btn btn-danger"
                onClick={this.props.handleAddToCardClick}
              >
                Remove
              </button>
            ) : (
              <button
                href="#"
                class="btn btn-primary"
                onClick={this.props.handleAddToCardClick}
              >
                Add to cart
              </button>
            )}

            <Start
              onClick={this.props.handleAddToFavorites}
              color={
                this.props.favorites.includes(this.props.id) ? true : false
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
