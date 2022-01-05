import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Rating from '../widget/Rating';
import axios from 'axios';

function BestItem({ productId }) {
  const [productItem, setProductItem] = useState({});
  const [cartData, setCartData] = useState();
  const [wishData, setWishData] = useState();
  const [wishCheck, setWishCheck] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch(`http://localhost:8080/product/get/${productId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductItem(data);
      });
  }, [productId]);

  useEffect(() => {
    axios.get('http://localhost:8080/cart/all/1').then((res) => {
      setCartData(res.data);
    });
  }, [check]);

  useEffect(() => {
    axios.get('http://localhost:8080/wish/all/1').then((res) => {
      setWishData(res.data);
     
      for (let i = 0; i < res.data.length; i++) {
        if (productId === res.data[i].product.id) {
          setIsTrue(true);
        }
      }
    });
  }, [wishCheck]);

  const addWishList = () => {
    const posturl = 'http://localhost:8080/wish/add';
   if(wishData.length === 0) {
      axios.post(posturl, {
        wishId: 1,
        productId: productItem.id
      }).then(() => {
        setWishCheck(!wishCheck);
      })
    }
    else {
    for(let i = 0; i < wishData.length; i++) {
      if( productId === wishData[i].product.id) {
        // delete
        axios.delete(`http://localhost:8080/wish/delete/${wishData[i].id}`);
        setIsTrue(false);
        break;
      }
      if (i === wishData.length - 1) {
        axios
          .post(posturl, {
            wishId: 1,
            productId: productItem.id
          })
          .then((Response) => {
            console.log(Response.status);
            if (Response.status === 201) {
              navigate('/wishList');
            }
          });
      }    
    }
  }

  };

  const handleAddCart = () => {
    const postUrl = 'http://localhost:8080/cart/add';
    if (cartData.length === 0) {
      axios
        .post(postUrl, {
          cartId : 1,
          productId: productItem.id
        })
        .then((Response) => {
          setCheck(!check);
          if (Response.status === 201) {
            navigate('/cart');
          }
        })  
        .catch(function (error) {});
    } 

    // put
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].product.id === productItem.id) {
        if (
          window.confirm(
            '이미 장바구니에 존재하는 상품입니다. 그래도 추가하시겠읍니까?'
          )
        ) {
          axios
            .put("http://localhost:8080/cart", {
              id : cartData[i].id,
              quantity : cartData[i].quantity + 1
            })
            .then((Response) => {
              if (Response.status === 200) {
                navigate('/cart');
              }
            })
            .catch(function (error) {});
          break;
        } else {
          window.alert('추가되지 않았읍니다.');
        }
      }
      if (i === cartData.length - 1) {
        // post
        axios
          .post(postUrl, {
            cartId: 1,
            productId: productItem.id
          })
          .then((Response) => {
            if (Response.status === 201) {
              navigate('/cart');
            }
          })

          .catch(function (error) {});
      }
    }
  }
  

  return (
    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 grid-item cat1 cat4'>
      <div
        className={
          productItem.isBest
            ? 'arrival-items arrival-new-items text-center mb-55'
            : 'arrival-items text-center mb-55'
        }
      >
        <div className='arrival-img'>
          <Link to={`/detail/${productItem.id}`}>
            <img
              src={`./img/products/${productItem.productTitleImage}`}
              alt='bag'
              width={350}
              height={350}
            />
          </Link>
        </div>
        {/* {productItem.productImage.map(url => url.imageUrl).map(img => <img width='50px' src={`./img/products/01.png`} />)} */}
        <div className='arrival-details position-relative pt-25'>
          <h5>
            <Link to={`/detail/${productItem.id}`}>
              {productItem.productName}
            </Link>
          </h5>
          <Rating rate={productItem.rate} />
          <div className='price'>
            <span>
              {productItem.price && productItem.price.toLocaleString()}원
            </span>
          </div>
          <div className='buy-info'>
            <Link
              to=''
              onClick={handleAddCart}
              className='slider-btn add-btn float-left position-relative'
            >
              Add To Cart
            </Link>
            <ul className='wishlist text-right'>
              <li>
                <Link to='' onClick={addWishList}>
                  {isTrue ? (
                    <i className='las la-heart' style={{ color: 'red' }}></i>
                  ) : (
                    <i className='las la-heart'></i>
                  )}
                </Link>
              </li>
              <li>
                <button className=' popbtn'>
                  <i className='fas fa-search-plus'></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestItem;
