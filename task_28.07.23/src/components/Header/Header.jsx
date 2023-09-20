import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  render() {
    const { cart, favorites } = this.props;

    return (
      <div className="Header">
        <div className="container">
          <div>
            <h4>Ecommerce</h4>
          </div>

          <div className="icon-container">
            <div className="icon-container">
              <i className="bx bxs-cart"></i>
              <p>{cart.length}</p>
            </div>
            <div className="icon-container">
              <i className="bx bxs-star"></i>
              <p>{favorites.length}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
