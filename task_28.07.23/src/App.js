import React, { Component } from 'react';
import "./styles/App.scss";
import Home from './pages/Home';
import Header from './components/Header/Header';

class App extends Component {
    constructor(props) {
        super(props);

        const cartData = JSON.parse(localStorage.getItem('cart'));
        const favoriteData = JSON.parse(localStorage.getItem('favorites'));

        this.state = {
            cart: cartData || [],
            favorites: favoriteData || [],
            productList: null,
            loading: true,
        };
    }

    handleFavoritesAddRemove = (favorite) => {
        const { favorites } = this.state;
        const isIn = favorites.find((item) => item.id === favorite.id);
        if (isIn) {
            const newFavorites = favorites.filter((item) => item.id !== favorite.id);
            this.setState({ favorites: newFavorites });
        } else {
            const newFavorites = [...favorites, favorite];
            this.setState({ favorites: newFavorites });
        }
    }

    handleCartAddRemove = (product) => {
        const { cart } = this.state;
        const isIn = cart.find((item) => item.id === product.id);
        if (isIn) {
            const newCart = cart.filter((item) => item.id !== product.id);
            this.setState({ cart: newCart });
        } else {
            const newCart = [...cart, product];
            this.setState({ cart: newCart });
        }
    }

    loadProducts = async () => {
        try {
            const res = await fetch('./data.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            const fetchedData = await res.json();
            this.setState({ productList: fetchedData.products, loading: false });
        } catch (error) {
            // Handle error
        }
    }

    componentDidMount() {
        this.loadProducts();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.cart !== this.state.cart) {
            localStorage.setItem("cart", JSON.stringify(this.state.cart));
        }
        if (prevState.favorites !== this.state.favorites) {
            localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
        }
    }

    render() {
        const { cart, favorites, productList, loading } = this.state;

        return (
            <>
                <Header cart={cart} favorites={favorites} />
                <Home
                    handleFavoritesAddRemove={this.handleFavoritesAddRemove}
                    favorites={favorites}
                    cart={cart}
                    handleCartAddRemove={this.handleCartAddRemove}
                    productList={productList}
                    loading={loading}
                />
            </>
        );
    }
}

export default App;
