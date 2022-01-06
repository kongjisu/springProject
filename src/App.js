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
import Test from './components/page/Test';
import SignUp from './components/page/SignUp';

function App() {
  
  
  const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    
      const handleClose = () => {
        setOpen(false);
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
  useEffect(() => {

    axios.get('http://localhost:8080/image/getAll/1')
      .then(res => console.log(res.data));
  }, []);
  return (
<>
    <Modal
      open={open}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Login handleClose={handleClose}/>
    </Modal>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test handleOpen={handleOpen} handleClose={handleClose}/>}/>
        <Route path="/signin" element={<Login />}/> 
        <Route path="/signup" element={<SignUp />}/>      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
