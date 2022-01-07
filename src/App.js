import React, { useEffect, useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/page/Cart';
import ProductDetail from './components/page/ProductDetail';
import TopScroll from './components/layout/TopScroll';
import ProductAll from './components/page/ProductAll';
import './css/normalize.css';
import './css/font-awesome.min.css';
import './css/bootstrap.min.css';
import './css/line-awesome.min.css';
import './css/magnific-popup.css';
import './css/animate.css';
import './css/slick.css';
import './css/owl.carousel.min.css';
import './css/jquery.nice-number.css';
import './css/mean-menu.css';
import './css/default.css';
import './style.css';
import Wishlist from './components/page/Wishlist';
import axios from 'axios';
import Login from './components/page/Login';
import { Box, Modal, Switch, Typography, Button } from '@mui/material';
import Main from './components/page/Main';
import Home from './components/page/Home';
import Footer from './components/layout/Footers';
import SignUp from './components/page/SignUp';
import Header from './components/layout/Header';
import ScrollTop from './components/layout/ScrollTop';

function App() {
  
  
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const handleLoginOpen = () => {
    setLoginOpen(true);
}

  const handleLoginClose = () => {
    setLoginOpen(false);
}

const handleSignUpOpen = () => {
  setLoginOpen(false);
  setSignUpOpen(true);
}

const handleSignUpClose = () => {
  setSignUpOpen(false);
  setLoginOpen(true);
}
  // const [products, setProducts] = useState([]);
  // useEffect(()=>{
  //   // axios.get('http://localhost:8080/product/getAll').then(res => console.log(res.data));
  //   axios.post('http://localhost:8080/product/add', {
  //     productName : 'eraer',
  //     stockQuantity : 11,
  //     price : 8000
  //   }).then(res => console.log(res));
  // },[]);

  return (
<>
    <Modal
      open={loginOpen}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Login handleClose={handleLoginClose} handleOpen={handleSignUpOpen}/>
    </Modal>
    
    <Modal
      open={signUpOpen}
    >
     <SignUp handleClose={handleSignUpClose} />
    </Modal>
    <BrowserRouter>
    <ScrollTop />
    <TopScroll />
        <Header handleOpen={handleLoginOpen} />        
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cart" element={<Cart />} />
                <Route path="/detail/:id" element={<ProductDetail />} />
                <Route path="/ProductAll" element={<ProductAll />} />
                <Route path="/wishList" element={<Wishlist />} />            
            </Routes>            
        <Footer />    
    </BrowserRouter>


    {/* <Routes>
        <Route path="/" element={<Test handleOpen={handleOpen} handleClose={handleClose}/>}/>
        <Route path="/signin" element={<Login />}/> 
        <Route path="/signup" element={<SignUp />}/>      
      </Routes> */}
    </>
  );
}

export default App;
