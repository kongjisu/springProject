import React from 'react';
import Wishlist from './Wishlist';
import ProductAll from './ProductAll';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import ScrollTop from '../layout/ScrollTop';
import TopScroll from '../layout/TopScroll';
import Header from '../layout/Header';
import Footer from '../layout/Footers';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';

function Main() {
    return (
        <>
            <ScrollTop />
            <TopScroll />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/detail/:id" element={<ProductDetail />} />
                <Route path="/ProductAll" element={<ProductAll />} />
                <Route path="/wishList" element={<Wishlist />} />
            </Routes>
            <Footer />
        </>
    );
}

export default Main;