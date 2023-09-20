import React, { Component } from "react";
import Button from "./Button";
import Modal from "./Modal";
import Card from "./ProductCard";

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      productAddToCart: null,
    };
  }

  handleAddToCardClick = (item) => {
    this.setState((prevState) => ({
      productAddToCart: item,
      modal: !prevState.modal,
    }));
  };

  toggleFirstModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  handleAddToCartConfirm = () => {
    const { productAddToCart } = this.state;
    const { handleCartAddRemove } = this.props;

    handleCartAddRemove(productAddToCart);

    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  handleAddToFavorites = (favorit) => {
    const { handleFavoritesAddRemove } = this.props;
    handleFavoritesAddRemove(favorit);
  };

  ifInCart = () => {
    const { cart } = this.props;
    const { productAddToCart } = this.state;
    const inCart = cart.find((item) => item.id === productAddToCart.id);
    return inCart ? true : false;
  };

  render() {
    const { favorites, dataToList, cart } = this.props;
    const { modal } = this.state;

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
                  handleAddToFavorites={() => this.handleAddToFavorites(item)}
                  handleAddToCardClick={() => this.handleAddToCardClick(item)}
                />
              );
            })
          ) : (
            <h1>Empty</h1>
          )}
        </div>

        {modal && (
          <Modal
            header={this.ifInCart() ? "Remove from cart" : "Add to cart"}
            closeButton={true}
            text="Please confirm operation."
            actions={
              <Button
                backgroundColor={"orange"}
                text={this.ifInCart() ? "Remove " : "Add"}
                onClick={this.handleAddToCartConfirm}
              />
            }
            onClose={this.toggleFirstModal}
          />
        )}
      </div>
    );
  }
}

export default ProductList;
