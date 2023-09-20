import React, { Component } from "react";
import ProductList from "../components/ProductList";

class Home extends Component {
  render() {
    const {
      productList,
      loading,
      handleFavoritesAddRemove,
      handleCartAddRemove,
      cart,
      favorites,
    } = this.props;

    return (
      <div className="container">
        <h1>Products list</h1>
        {loading ? (
          <h3>Loading... </h3>
        ) : (
          <ProductList
            favorites={favorites}
            handleFavoritesAddRemove={handleFavoritesAddRemove}
            cart={cart}
            dataToList={productList}
            handleCartAddRemove={handleCartAddRemove}
          />
        )}
      </div>
    );
  }
}

export default Home;
