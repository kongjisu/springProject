import React, { useState } from 'react';
import Footer from '../layout/Footers';
import Header from '../layout/Header';
import ScrollTop from '../layout/ScrollTop';
import TopScroll from '../layout/TopScroll';
import Cart from './Cart';
import Home from './Home';
import ProductAll from './ProductAll';
import ProductDetail from './ProductDetail';
import Wishlist from './Wishlist';

import {  Routes, Route } from 'react-router-dom';
import { Modal } from '@mui/material';
import { Login } from '@mui/icons-material';


function Test({handleOpen, handleClose}) {
    
    return ( 
        <>
    <ScrollTop />
    <TopScroll />
        <Header handleOpen={handleOpen} handleClose={handleClose} />
        
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cart" element={<Cart />} />
                <Route path="/detail/:id" element={<ProductDetail />} />
                <Route path="/ProductAll" element={<ProductAll />} />
                <Route path="/wishList" element={<Wishlist />} />
            
            </Routes>
            
        <Footer />    
        
       </>

     );
}

export default Test;