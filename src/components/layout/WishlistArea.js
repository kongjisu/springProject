import React, { useEffect, useState } from 'react';
import WishItem from '../ui/WishItem';
import axios from 'axios';

function WishlistArea() {
  const [wishListItem, setWishListItem] = useState([]);
  const [wishCheck, setWishCheck] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/wish/all/1')
    .then((Response) => {
      setWishListItem(Response.data);
    });
  }, [wishCheck]);

  return (
    <div class="wishlist-area shop-list pt-105">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="cart-table table-responsive">
              <table class="table table-bordered">
                <thead class="wishlist-head">
                  <tr>
                    <th scope="col">
                      <span>PRODUCT NAME</span>
                    </th>
                    <th scope="col">
                      <span>UNIT PRICE</span>
                      <span class="d-none">ALL DETAILS</span>
                    </th>
                    <th scope="col">
                      <span>STOCK STATUS</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="wishlist-body">
                  {wishListItem &&
                    wishListItem.map((item) => {
                      return (
                        <WishItem
                          key={item.id}
                          item={item}
                          wishCheck={wishCheck}
                          setWishCheck={setWishCheck}
                        />
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistArea;
