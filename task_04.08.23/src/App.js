import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import "./styles/App.scss"
import Home from './pages/Home'
import Header from './components/Header/Header'
import Favorites from './pages/Favorites'


import Cart from './pages/Cart'
const cartData = JSON.parse(localStorage.getItem('cart'))
const favoriteData = JSON.parse(localStorage.getItem('favorites'))


function App() {
    const [cart, setCart] = useState(cartData || []);
    const [favorites, setFavorites] = useState(favoriteData || []);
    const [productList, setProductList] = useState();
    const [loading, setLoading] = useState(true);

    const handleFavoritesAddRemove = (favorite) => {
        const isIn = favorites.find((item) => item.id === favorite.id);
        if (isIn) {

            const newFavorites = favorites.filter(
                (item) => item.id != favorite.id
            );

            localStorage.setItem("favorites", JSON.stringify(newFavorites));
            setFavorites(newFavorites)

        } else {

            const newFavorites = [...favorites, favorite];

            localStorage.setItem("favorites", JSON.stringify(newFavorites));
            setFavorites(newFavorites)

        }

    }


    const handleCartAddRemove = (product) => {
        const isIn = cart.find((item) => item.id === product.id);
        if (isIn) {

            const newCart = cart.filter(
                (item) => item.id !== product.id
            );

            localStorage.setItem("cart", JSON.stringify(newCart));
            setCart(newCart)

        } else {

            const newCart = [...cart, product];

            localStorage.setItem("cart", JSON.stringify(newCart));
            setCart(newCart)

        }

    }
    const loadProducts = async () => {
        try {
            const res = await fetch('./data.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            const fetchedData = await res.json();
            setProductList(fetchedData.products);
            setLoading(false)
        } catch (error) {

        }
    }
    useEffect(() => {
        loadProducts();
    }, [])

    return (
        <>
            <Header cart={cart} favorites={favorites} />
            <Routes>
                <Route path="/" element={<Home handleFavoritesAddRemove={handleFavoritesAddRemove} favorites={favorites} cart={cart} handleCartAddRemove={handleCartAddRemove} productList={productList} loading={loading} />} />
                <Route path="/favorites" element={<Favorites handleFavoritesAddRemove={handleFavoritesAddRemove} favorites={favorites} cart={cart} handleCartAddRemove={handleCartAddRemove} productList={productList} loading={loading} />} />
                <Route path='/cart' element={<Cart handleFavoritesAddRemove={handleFavoritesAddRemove} favorites={favorites} cart={cart} handleCartAddRemove={handleCartAddRemove} productList={productList} loading={loading} />} />
            </Routes>
        </>
    )
}

export default App