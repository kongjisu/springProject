import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Product({ productId }) {
  const [product, setProduct] = useState([]);
  const [image, setImage] = useState([]);
   
  useEffect(() => {

  axios.get('http://localhost:8080/product/getAll')
  .then(res=> console.log(res.data));
},[]);
    
  return (
    <div>
      <li>상품아이디 : {product.id}</li>
      <li>상품명 : {product.productName}</li>
      {image.map((item) => (
        <li>{item.imageUrl}</li>
      ))}
      <br />

      <br />
    </div>
  );
}

// axios.post('http://localhost:8080/product/add', {
//   productName : 'eraer',
//   stockQuantity : 11,
//   price : 8000
// }).then(res => console.log(res));
// },[]);

export default Product;
