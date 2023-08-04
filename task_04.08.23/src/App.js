import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./styles/App.scss"
import Home from './pages/Home'
import Header from './components/Header/Header'
import Favorites from './pages/Favorites'
import Cart from './pages/Cart'
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </>
    )
}

export default App