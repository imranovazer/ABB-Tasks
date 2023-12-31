import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const { cart, favorites } = useSelector((state) => state);

  return (
    <div className="Header">
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>

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

export default Header;
