import React, { useEffect, useState } from 'react';
import Product from './Product';

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3005/productList')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductList(data);
      });
  }, []);
  return (
    <div>
      <ul>
        {productList.map((item) => (
          <Product key={item.id} productId={item.productId} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
