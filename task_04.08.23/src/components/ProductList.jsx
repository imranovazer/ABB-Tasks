import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import Card from "./ProductCard";

const ProductList = ({
  favorites,
  dataToList,
  cart,
  handleCartAddRemove,
  handleFavoritesAddRemove,
}) => {
  const [modal, setModal] = useState(false);
  const [productAddToCart, setProductAddToCart] = useState(null);

  const handleAddToCardClick = (item) => {
    setProductAddToCart(item);
    setModal((prev) => !prev);
  };

  const toggleFirstModal = () => {
    setModal((prev) => !prev);
  };

  const handleAddToCartConfirm = () => {
    handleCartAddRemove(productAddToCart);

    setModal((prev) => !prev);
  };
  const handleAddToFavorites = (favorit) => {
    handleFavoritesAddRemove(favorit);
  };
  const ifInCart = () => {
    const inCart = cart.find((item) => item.id === productAddToCart.id);

    return inCart ? true : false;
  };

  return (
    <div className="app container">
      <div className="products-container  ">
        {dataToList.length > 0 ? (
          dataToList?.map((item) => {
            return (
              <Card
                favorites={favorites}
                cart={cart}
                name={item.name}
                image={item.imagePath}
                id={item.id}
                key={item.id}
                handleAddToFavorites={() => handleAddToFavorites(item)}
                handleAddToCardClick={() => handleAddToCardClick(item)}
              />
            );
          })
        ) : (
          <h1>Empty</h1>
        )}
      </div>

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
