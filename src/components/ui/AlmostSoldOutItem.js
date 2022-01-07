import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AlmostSoldOutItem({ productId }) {
  const [productItem, setProductItem] = useState([]);
  const [images, setImages]=useState([]);
  
  useEffect(() => {
    axios.get(`http://localhost:8080/image/getAll/${productId}`)
    .then(res=> setImages(res.data));
    
    axios.get(`http://localhost:8080/product/get/${productId}`)
      .then((res) => {
        console.log(res.data);
        setProductItem(res.data);
      });
  }, [productId]);

  return (
    <div className='col-xl-4 col-lg-4 col-md-4'>
      <div className='news-items mb-30 mb-md-0'>
        <div className='news-img'>
          <Link to={`/detail/${productItem.id}`}>
            <img
              src={images.length > 0 && `./img/products/${images[0].imageUrl}`}
              alt='img1'
              width={350}
              height={350}
            />
          </Link>
        </div>
        <div className='news-details pt-20'>
          <div className='news-title pr-50'>
            <Link to={`/detail/${productItem.id}`}>
              {productItem.productName}
            </Link>
          </div>
          <p className='d-block'>
            {productItem.price && productItem.price.toLocaleString()} 원
          </p>
          <span className='d-block'>
            <span style={{ color: 'red' }}>{productItem.stock}</span> 개 남음
          </span>
          <Link to={`/detail/${productItem.id}`}>
            <p className='slider-btn d-inline-block position-relative mt-10'>
              Read More
            </p>{' '}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AlmostSoldOutItem;
