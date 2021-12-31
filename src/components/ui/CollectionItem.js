import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CollectionItem({ item }) {
  const [cartData, setCartData] = useState();
  useEffect(() => {
    axios.get('http://localhost:3006/cartLists').then((res) => {
      setCartData(res.data);
    });
  }, []);

  const navigate = useNavigate();
  const handleAddCart = () => {
    const putUrl = `http://localhost:3006/cartLists/${item.productId}`;

    console.log(putUrl);

    const postUrl = 'http://localhost:3006/cartLists';
    console.log();
    if (cartData.length === 0) {
      axios
        .post(postUrl, {
          productName: item.productName,
          id: item.productId,
          quantity: 1,
          price: item.price,
          titleImage: item.productTitleImage,
        })
        .then((Response) => {
          if (Response.status === 201) {
            navigate('/cart');
          }
        })

        .catch(function (error) {});
    }

    // put
    for (let i = 0; i < cartData.length; i++) {
      console.log(i, cartData[i], item.productId);
      if (cartData[i].productName === item.productName) {
        if (
          window.confirm(
            '이미 장바구니에 존재하는 상품입니다. 그래도 추가하시겠읍니까?'
          )
        ) {
          axios
            .put(putUrl, {
              productName: item.productName,
              id: item.productId,
              quantity: cartData[i].quantity + 1,
              price: item.price,
              titleImage: item.productTitleImage,
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
            productName: item.productName,
            id: item.productId,
            quantity: 1,
            price: item.price,
            titleImage: item.productTitleImage,
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
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 grid-item cat1 cat4">
      <div class="arrival-items arrival-new-items text-center mb-55">
        <div class="arrival-img">
          <img
            src={`img/products/${item.productTitleImage}`}
            alt="bag"
            width={240}
            height={270}
          />
        </div>
        <div class="arrival-details position-relative pt-25">
          <h5>
            <a href="shop_detalis.html">{item.productName}</a>
          </h5>
          <ul class="rating">
            <li>
              <i class="las la-star"></i>
            </li>
            <li>
              <i class="las la-star"></i>
            </li>
            <li>
              <i class="las la-star"></i>
            </li>
            <li>
              <i class="las la-star"></i>
            </li>
            <li>
              <i class="las la-star"></i>
            </li>
          </ul>
          <div class="price">
            {/* <del>$103</del> */}
            <span class="ml-10">{item.price.toLocaleString()} 원</span>
          </div>
          <div class="buy-info">
            <Link to="">
              <span
                class="slider-btn add-btn float-left position-relative"
                onClick={handleAddCart}
              >
                Add To Cart
              </span>
            </Link>
            <ul class="wishlist text-right">
              <li>
                {' '}
                <a href="my_wishlist.html">
                  <i class="lar la-heart"></i>
                </a>
              </li>
              <li>
                <button class=" popbtn">
                  <i class="fas fa-search-plus"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionItem;
