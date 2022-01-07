import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function WishItem({ item, wishCheck, setWishCheck }) {
  const [cartData, setCartData] = useState([]);
  const [image, setImage] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/image/getAll/${item.id}`)
    .then(res => setImage(res.data[0]))
  }, [])

  const deleteItem = () => {
    axios
      .delete(`http://localhost:8080/wish/delete/${item.id}`)
      .then((res) => setWishCheck(!wishCheck));
  };

  useEffect(() => {
    axios.get('http://localhost:8080/cart').then((res) => {
      setCartData(res.data);
    });
  }, []);

  const addCart = () => {
    const putUrl = `http://localhost:3006/cartLists/${item.id}`;

    const postUrl = `http://localhost:8080/cart/add`;
    if (cartData.length === 0) {
      axios
        .post(postUrl, {
          cartId : 1,
          productId: cartData.id
        })
        .then((Response) => {
          if (Response.status === 201) {
            navigate('/cart');
          }
        })

        .catch(function (error) {});
    }

    for (let i = 0; i < cartData.length; i++) {
      console.log(i, cartData[i], item.id);
      if (cartData[i].productName === item.product.id) {
        if (
          window.confirm(
            '이미 장바구니에 존재하는 상품입니다. 그래도 추가하시겠읍니까?'
          )
        ) {
          axios
            .put(putUrl, {
              productName: item.productName,
              id: item.id,
              quantity: cartData[i].quantity + 1,
              price: item.price,
              titleImage: item.titleImage,
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
        axios
          .post(postUrl, {
            productName: item.productName,
            id: item.id,
            quantity: 1,
            price: item.price,
            titleImage: item.titleImage,
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
    <tr>
      <td>
        <div className='d-flex'>
          <div className='cart-img'>
            <img
              src={image && `./img/products/${image.imageUrl}`}
              width='100px'
              height='129px'
              alt='product'
            />
          </div>
          <div className='product-name mt-auto mb-auto ml-30'>
            <h6>
              <a href='shop_detalis.html'>{item.product.productName}</a>
            </h6>
          </div>
        </div>
      </td>
      <td>
        <div className='product-price '>
          <span>{item.product.price && item.product.price.toLocaleString()} 원</span>
          <div className='cart-mobile-content d-none'>
            <span>{item.product.stockQuantity} 개 남음</span>
            <div className='cart-button text-center float-right mt-10'>
              <div onClick={addCart}>Add to cart</div>
              <button onClick={deleteItem} className='mt-15 mt-lg-0'>
                X
              </button>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className='stock-detalis'>
          <span>{item.product.stockQuantity} 개 남음</span>
          <div className='cart-button text-center float-right'>
            <Link onClick={addCart} to=''>
              Add to cart
            </Link>
            <button onClick={deleteItem} className='mt-15 mt-lg-0'>
              X
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default WishItem;
