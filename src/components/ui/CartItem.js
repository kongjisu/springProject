import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

function CartItem({ item, cartCheck, setCartCheck }) {
  const cartItemQty = useRef();
  const [cnt, setCnt] = useState(item.quantity);
  useEffect(() => {
    console.log("CartItem");
    const url = `http://localhost:8080/image/getAll/${item.product.id}`
    axios.get(url).then(res => console.log(res.data));
  }, [item.product.id]);

  // delete
  const cartDelete = () => {
    const url = `http://localhost:8080/cart/${item.id}`;
    if (window.confirm('장바구니에서 삭제하시겠읍니까?')) {
      axios.delete(url).then((res) => {
        setCartCheck(!cartCheck);
      });
    } else {
      window.alert('삭제되지 않았읍니다.');
    }
  };

  const handleCartList = (e) => {
    e.preventDefault();
    // setCartCheck(!cartCheck);
    // setCnt(parseInt(cartItemQty.current.value));
    axios.put("http://localhost:8080/cart", {
      id: item.id,
      quantity: cartItemQty.current.value
    })
    // fetch(`http://localhost:3006/cartLists/${item.id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     ...item,
    //     quantity: parseInt(cartItemQty.current.value),
    //   }),
    // });
  };

  return (
    <tr>
      <td>
        <div className='d-flex'>
          <div className='cart-img'>
            <img
              src={`./img/products/${item.titleImage}`}
              width='150px'
              alt='product'
            />
          </div>
          <div className='product-name mt-auto mb-auto ml-30'>
            <h6>{item.product.productName}</h6>
          </div>
        </div>
      </td>
      <td>
        <div className='product-price '>
          <span>{item.product.price} 원</span>
          <div className='shopping-cart-mobile-content d-none mt-10'>
            <div className='quty'>
              <input
                className='qty'
                min='0'
                max='500'
                type='number'
                defaultValue={item.quantity}
                ref={cartItemQty}
                onChange={handleCartList}
              />
            </div>
            <div className='cart-button mt-20'>
              <span>{(cnt * item.product.price)} 원</span>
              <button className='float-right '>X</button>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className='quty'>
          <input
            className='qty'
            min='1'
            max='500'
            type='number'
            defaultValue={item.quantity}
            ref={cartItemQty}
            onChange={handleCartList}
          />
        </div>
      </td>
      <td>
        <div className='cart-button '>
          <span>{(cnt * item.product.price)} 원</span>
          <button onClick={cartDelete} className='float-right'>
            X
          </button>
        </div>
      </td>
    </tr>
  );
}

export default CartItem;
