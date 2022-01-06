import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../logo.png';
import axios from 'axios';
import { Modal } from '@mui/material';
import { Login } from '@mui/icons-material';

function Header({handleOpen, handleClose}) {
  const [cart, setCart] = useState([]);
  

  

  useEffect(() => {
    const url = 'http://localhost:3006/cartLists';
    axios.get(url).then((Response) => {
      setCart(Response.data);
    });
  }, []);

  return (
    <>
      <header>
        <div className='header-1 pt-35 '>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-2 col-lg-2 col-md-6 col-sm-6 col-7 order-md-2 order-lg-1'>
                <div className='logo text-md-center text-lg-left'>
                  <Link to='/'>
                    <img src={img} width='150px' alt='aruk-logo' />
                  </Link>
                </div>
              </div>
              <div className='col-xl-7 col-lg-7 col-md-3 order-md-1 offset-sm-2 offset-md-0 order-lg-2 col-sm-auto'>
                <nav>
                  <div id='mobile-menu' className='main-menu'>
                    <ul>
                      <li>
                        <Link to='/'>Home</Link>
                        {/* <ul className="sub-menu pb-10 pt-10 pl-15 pr-15">
                          <li><a href="index.html">Home Style</a></li>
                        </ul> */}
                      </li>
                      <li>
                        <a href='shop_grid.html'>Shop</a>
                        {/* <ul className="sub-menu menu-level pb-10 pt-20 pl-15 pr-15">
                          <li>
                            <div>
                              <h4>Shop Grid</h4>
                              <ul className="sub-menu">
                                <li>
                                  <a href="shop_grid.html">Shop Grid</a>
                                </li>
                                <li>
                                  <a href="shop_grid_left_sidebar.html">
                                    Shop Grid LS
                                  </a>
                                </li>
                                <li>
                                  <a href="shop_grid_right_sidebar.html">
                                    {' '}
                                    Shop Grid RS
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul> */}
                      </li>
                      <li>
                        <Link to='/ProductAll'>Collection</Link>{' '}
                      </li>
                      <li>
                        <a href='index.html'>Pages</a>
                        {/* <ul className='sub-menu pb-10 pt-10 pl-15 pr-15'>
                          <li>
                            <a href='about_us.html'>About US</a>
                          </li>
                        </ul> */}
                      </li>
                      <li>
                        <a href='blog.html'>Blog</a>
                        {/* <ul className='sub-menu pb-10 pt-10 pl-15 pr-15'>
                          <li>
                            <a href='blog.html'>Blog</a>
                          </li>
                        </ul> */}
                      </li>
                      <li>
                        <a href='contact_page.html'>Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-5 order-md-3 order-lg-3 '>
                <div className='nav-icons'>
                  <ul>
                    <li>
                      <div className='search position-relative'>
                        <span>
                          <i className='fas fa-search'></i>
                        </span>
                        <div className='search-overlap'></div>
                        <form action='#' className='search-form position-fixed'>
                          <div className='search-input '>
                            <div className='search-close'>
                              <span>X</span>
                            </div>
                            <input
                              type='text'
                              placeholder='Enter your keywords.....'
                            />
                          </div>
                        </form>
                      </div>
                    </li>
                    <li>
                      <Link to='/cart'>
                        <i className='fas fa-shopping-cart'></i>
                        <span className='badge badge-pink '>{cart.length}</span>
                      </Link>
                      {/* <a href="my_wishlist.html"> */}

                      {/* </a> */}
                    </li>
                    <li>
                      <Link to='/wishList'>
                        <i className='las la-heart'></i>
                      </Link>
                    </li>
                    <li className='position-relative'>
                      <span className='product-cart'>
                        <i className='fas fa-user' onClick={handleOpen}></i>
                      </span>
                      <div className='product-on-sale pb-30'>
                        <div className='product-close-icon'>
                          <span>X</span>
                        </div>
                        <div className='product-wrapper d-flex'>
                          <div className='product-img position-relative '>
                            <img src='/img/products/22.png' alt='product' />
                            <div className='cart-icon'>
                              <a href='shopping_cart.html'>
                                <i className='las la-cart-plus'></i>
                              </a>
                            </div>
                          </div>
                          <div className='product-details mt-10'>
                            <span>Shoes</span>
                            <h6>
                              <a href='shop_detalis.html'>Leather Menz Shoes</a>
                            </h6>
                            <div className='price d-flex'>
                              <span>$999</span>
                              <del>$899</del>
                            </div>
                          </div>
                        </div>
                        <div className='product-wrapper mt-20 d-flex'>
                          <div className='product-img position-relative'>
                            <img src='/img/products/23.png' alt='product' />
                            <div className='cart-icon'>
                              <a href='shopping_cart.html'>
                                <i className='las la-cart-plus'></i>
                              </a>
                            </div>
                          </div>
                          <div className='product-details mt-10'>
                            <span>Shoes</span>
                            <h6>
                              <a href='shop_detalis.html'>Leather Menz Shoes</a>
                            </h6>
                            <div className='price d-flex'>
                              <span>$999</span>
                              <del>$899</del>
                            </div>
                          </div>
                        </div>
                        <div className='cart-price pr-20 pt-30'>
                          <p>
                            Subtotal: <span>$999.00</span>
                          </p>
                          <p>
                            Total: <span>$999.00</span>
                          </p>
                        </div>
                        <div className='cart-button mt-20 pl-15'>
                          <a href='shopping_cart.html'>View Cart</a>
                          <a href='checkout_page.html'>Checkout</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='mobile-menu'></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
