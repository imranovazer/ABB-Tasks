import React, { useContext, useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import Card from "./ProductCard";

import { useDispatch, useSelector } from "react-redux";
import { addRemoveCart } from "../redux/actions/cartActions";
import { addRemoveFavorite } from "../redux/actions/favoriteActions";
import {
  closeModal,
  displayModal,
  toggleModal,
} from "../redux/actions/modalActions";
import { ViewContex } from "../contex/ViewContex";
import Start from "../assets/Start";
const ProductList = ({ dataToList }) => {
  const { view, switchView } = useContext(ViewContex);
  const modal = useSelector((state) => state.modal);
  const [productAddToCart, setProductAddToCart] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const favorites = useSelector((state) => state.favorites);

  const handleAddToCardClick = (item) => {
    setProductAddToCart(item);
    dispatch(displayModal());
  };

  const toggleFirstModal = () => {
    dispatch(toggleModal());
  };

  const handleAddToCartConfirm = () => {
    dispatch(addRemoveCart(productAddToCart));

    dispatch(closeModal());
  };
  const handleAddToFavorites = (favorit) => {
    dispatch(addRemoveFavorite(favorit));
  };
  const ifInCart = () => {
    const inCart = cart.find((item) => item.id == productAddToCart.id);

    return inCart ? true : false;
  };

  return (
    <div className="app container">
      <Button text="Switch view" backgroundColor="blue" onClick={switchView} />
      <br />
      {view === "cards" ? (
        <div className="products-container  ">
          {dataToList?.map((item) => {
            return (
              <Card
                text={item.text}
                testId={item.testId ? item.testId : null}
                name={item.name}
                image={item.imagePath}
                id={item.id}
                key={item.id}
                handleAddToFavorites={() => handleAddToFavorites(item)}
                handleAddToCardClick={() => handleAddToCardClick(item)}
              />
            );
          })}
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product name</th>
              <th>Product description</th>
              <th>Price</th>
              <th>Add to cart</th>
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>
            {dataToList?.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.text}</td>
                  <td>{item.price}</td>
                  <td>
                    {cart.find((cartItem) => cartItem.id == item.id) ? (
                      <button
                        href="#"
                        className="btn btn-danger"
                        onClick={() => handleAddToCardClick(item)}
                      >
                        Remove from cart
                      </button>
                    ) : (
                      <button
                        data-testid={item.testId ? item.testId : null}
                        href="#"
                        className="btn btn-primary"
                        onClick={() => handleAddToCardClick(item)}
                      >
                        Add to cart
                      </button>
                    )}
                  </td>
                  <td>
                    <Start
                      onClick={() => handleAddToFavorites(item)}
                      color={
                        favorites.find((i) => i.id == item.id) ? true : false
                      }
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {modal && (
        <Modal
          header={ifInCart() ? "Remove from cart" : "Add to cart"}
          closeButton={true}
          text="Please confirm operation."
          actions={
            <Button
              backgroundColor={"orange"}
              text={ifInCart() ? "Remove " : "Add"}
              onClick={handleAddToCartConfirm}
            />
          }
          onClose={toggleFirstModal}
        />
      )}
    </div>
  );
};

export default ProductList;
