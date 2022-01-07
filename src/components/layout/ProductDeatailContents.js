import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

function ProductDetailContents() {
  const urlCheck = useLocation();
  const addUrl = '../../img/products/';
  const [shopDetail, setShopDetail] = useState([]);
  const [image, setImage] = useState([]);
  const [miniImages, setMiniImages] = useState([]);
  const { id } = useParams();
  const [check, setCheck] = useState(false);
  useEffect(() => {
    axios.get(`http://localhost:8080/image/getAll/${id}`)
    .then((res) => {
      console.log(res.data);
      setImage(res.data);
     }, []);

     axios.get(`http://localhost:8080/product/get/${id}`)
     .then(res=>{
       
       setShopDetail(res.data);
     })

  }, [id]);

  const [cartData, setCartData] = useState();
  const navigate = useNavigate();

  useEffect(()=> {
    axios.get(`http://localhost:8080/cart/all/1`)
    .then(res => console.log(res.data));
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8080/cart/all/1`)
    .then((res) => {
      console.log(res.data)
      setCartData(res.data);
    });
  }, []);

  const handleAddCart = () => {
    const putUrl = `http://localhost:8080/cart`;
    const postUrl = `http://localhost:8080/cart/add`;
    
    if (cartData.length === 0) {
      axios.post(postUrl, {
          cartId : 1,
          productId: shopDetail.id
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
      if (cartData[i].id===shopDetail.id) {
        if (
          window.confirm(
            '이미 장바구니에 존재하는 상품입니다. 그래도 추가하시겠읍니까?'
          )
        ) {
          axios
            .put(putUrl, {
              id : shopDetail.id,           
              quantity : cartData[i].quantity + 1
            })
            .then((Response) => {
              console.log(Response.status);
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
            cartId : 1,
            productId : shopDetail.id,  
          })
          .then((Response) => {
            if (Response.status === 201) {
              navigate('/cart');
            }
          })

          .catch(function (error) {});
      }
    }
  };

  return (
    <div class='shop-details pt-120 '>
      <div class='container'>
        <div class='row'>
          <div class='col-xl-1 col-lg-1 col-md-2 col-sm-12'>
            <div class='nav nav-tabs ' id='approach-tabs' role='tablist'>
              {image.length > 0 && (image.slice(1).map(img => {
                return (<a
                class='product-thumb mb-15 active'
                id='nav-thumb1'
                data-toggle='tab'
                href='#nav-product1'
                role='tab'
                aria-controls='nav-product1'
                aria-selected='true'
              >
                <img
                  src={`${addUrl}${img.imageUrl}`}
                  alt='img'
                  key={id}
                  width={85}
                  height={126}
                />
              </a>)
            }))}
            </div>
          </div>
          <div class='col-xl-11 col-lg-11 col-md-10 col-sm-12'>
            <div class='product-wrapper d-flex'>
              <div class='product-imges tab-content' id='nav-tabContents'>
                <div
                  class='tab-pane product-img  active '
                  id='nav-product1'
                  role='tabpanel'
                  aria-labelledby='nav-thumb1'
                >
                  <img
                    src={image.length > 0 && (urlCheck
                        ? `${addUrl + image[0].imageUrl}`
                        : `${image[0].imageUrl}`)
                    }
                    alt='img'
                    width={550}
                    height={550}
                  />
                </div>
                <div
                  class='tab-pane product-img '
                  id='nav-product2'
                  role='tabpanel'
                  aria-labelledby='nav-thum2'
                >
                  <img src='img/products/32.png' alt='img' />
                </div>
                <div
                  class='tab-pane product-img'
                  id='nav-product3'
                  role='tabpanel'
                  aria-labelledby='nav-thumb3'
                >
                  <img src='img/products/33.png' alt='img' />
                </div>
              </div>
              <div class='product-details ml-50'>
                <h5>{shopDetail.productName}</h5>
                <ul class='rating d-inline-block mr-20'>
                  <li>
                    <i class='las la-star'></i>
                  </li>
                  <li>
                    <i class='las la-star'></i>
                  </li>
                  <li>
                    <i class='las la-star'></i>
                  </li>
                  <li>
                    <i class='las la-star'></i>
                  </li>
                  <li>
                    <i class='las la-star'></i>
                  </li>
                </ul>
                <span>03 Customer Review</span>
                <div class='price pt-15 pb-10'>
                  <span>
                    {shopDetail.price && shopDetail.price.toLocaleString()}
                  </span>
                </div>
                <p class='pr-110'>{shopDetail.productDetail}</p>
                {/* <div class="product-color pt-10 d-flex">
                  <h6>SELECT COLOR</h6>
                  <div class="color-code pl-20">
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div class="product-size d-flex pt-10">
                  <h6>SELECT SIZE</h6>
                  <ul class="ml-50">
                    <li class="active">Xl </li>
                    <li>L</li>
                    <li>M</li>
                    <li>S</li>
                    <li>XS</li>
                  </ul>
                </div> */}
                <div class='product-count d-flex mt-25'>
                  <div class='quty mr-20'>
                    <input class='qty' type='number' value='1' />
                  </div>
                  <div class='add-tocart mr-20 mt-15 mt-sm-0'>
                    <p class='p-btn position-relative'>
                      <Link to='/cart'>
                        <span onClick={handleAddCart}>Add to cart</span>
                      </Link>
                    </p>
                  </div>
                  <ul class='share d-flex align-items-center mt-15 mt-sm-0'>
                    <li>
                      <a href='my_wishlist.html'>
                        <i class='las la-heart'></i>
                      </a>
                    </li>
                    <li>
                      <a href='index.html'>
                        <i class='las la-random'></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <ul class='social-icon pt-80'>
                  <li>
                    <a href='https://www.facebook.com'>
                      <i class='fab fa-facebook-square'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/'>
                      <i class='fab fa-twitter-square'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.youtube.com/'>
                      <i class='fab fa-youtube'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/'>
                      <i class='fab fa-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class='pt-75' />
      </div>
    </div>
  );
}

export default ProductDetailContents;
