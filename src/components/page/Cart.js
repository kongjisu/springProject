import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CartItem from '../ui/CartItem';

function Cart() {
  const [cart, setCart] = useState([]);
  const [cartCheck, setCartCheck] = useState(false);

  useEffect(() => {
    const url = 'http://localhost:8080/cart/all/1';
    axios.get(url).then(res => {
      setCart(res.data);
      console.log(res.data);
    })
  }, [cartCheck]);


  const [priceSum, setPriceSum] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      let sum = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
      setPriceSum(sum);
    }
    // let sum = 0;
    // for (let i = 0; i < cart.length; i++) {
    //   sum += cart[i].price * cart[i].quantity;
    //   if (i === cart.length - 1) {
    //     setPriceSum(sum);
    //   }
    // }
  }, [cart]);

  return (
    <>
      {cart ? (
        <>
          <div className='page-title-area pt-150 pb-55'>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-12'>
                  <div className='page-titel-detalis  '>
                    <div className='section-title'>
                      <h2>Shopping Cart</h2>
                    </div>
                    <div className='page-bc'>
                      <nav aria-label='breadcrumb'>
                        <ol className='breadcrumb'>
                          <li className='breadcrumb-item'>
                            <a href='index.html'>Home</a>
                          </li>
                          <li
                            className='breadcrumb-item position-relative active'
                            aria-current='page'
                          >
                            <a href='shopping_cart.html'>Shopping cart</a>
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='wishlist-area shopping_cart shop-list pt-105'>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-12'>
                  <div className='cart-table table-responsive'>
                    <table className='table table-bordered'>
                      <thead>
                        <tr>
                          <th scope='col'>
                            <span>PRODUCT NAME</span>
                          </th>
                          <th scope='col'>
                            <span>UNIT PRICE </span>{' '}
                            <span className='d-none'>ALL DETAILS</span>
                          </th>
                          <th scope='col'>
                            <span>QUANTITY</span>
                          </th>
                          <th scope='col'>
                            <span>TOTAL</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart && cart.map((item) => (
                          <CartItem
                            key={item.id}
                            item={item}
                            cartCheck={cartCheck}
                            setCartCheck={setCartCheck}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className='container pt-50'>
              <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-6'>
                  <div className='coupon_discount'>
                    <h6>Counpon discount</h6>
                    <p>
                      Enter your code if you have one. Pellentesque habitant
                      morbi tristique senectus et netus et malesuada fames ac
                      turpis egestas. Vestibulum tortor quam, feugiat vitae
                    </p>
                    <form action='#' className='coupon-form pt-25'>
                      <input type='text' placeholder='Enter your code here' />
                      <button className='p-btn border-0 ml-20'>
                        APPLY COUNPON
                      </button>
                    </form>
                  </div>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6'>
                  <div className='cart-total pt-30 pl-40 pr-30 pb-50 mt-40 mt-md-0'>
                    <h6>Cart Total</h6>
                    <ul>
                      <li>
                        Sub Total{' '}
                        <span className='float-right'>
                          {priceSum.toLocaleString()} 원
                        </span>
                      </li>
                      <li>
                        Grand Total{' '}
                        <span className='float-right'>
                          {priceSum.toLocaleString()} 원
                        </span>
                      </li>
                    </ul>
                    <p className='pt-15'>Checkout with Mutilple Adresses</p>
                    <button className='p-btn border-0 mt-20'>
                      PROCEED TO CHECKOUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default Cart;
