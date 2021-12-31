import React, { useEffect, useState } from 'react';
import ScrollTop from './components/layout/ScrollTop';
import Header from './components/layout/Header';
import Home from './components/page/Home';
import Footers from './components/layout/Footers';
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

function App() {
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
    .then(res=> console.log(res.data));
  },[]);
  return (
    <BrowserRouter>
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
      <Footers />
    </BrowserRouter>
    
  );
}

export default App;
