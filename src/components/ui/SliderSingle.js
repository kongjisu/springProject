import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SliderSingle({ productId, isActive, idx }) {
  const [product, setProduct] = useState([]);
  const imageUrl = `./img/products/${product.productTitleImage}`;

  useEffect(() => {
    fetch(`http://localhost:3005/products/${productId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      });
  }, [productId]);

  return (
    <div className="single-slide slider-height position-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-8 offset-xl-1 offset-lg-1 offset-xl-0 ">
            <div
              className={
                isActive[idx]
                  ? 'slider-description mt-200 animated fadeInLeft'
                  : 'slider-description mt-200'
              }
            >
              <h1>{product.productName}</h1>
              <p className="pb-30 pr-120">{product.eventTitle}</p>
              <a href="Shop_grid.html" className="slider-btn position-relative">
                {product.sale}% SALE
              </a>
            </div>
          </div>
          <div
            className={
              isActive[idx]
                ? 'slider-images animated fadeInRight'
                : 'slider-images'
            }
          >
            <div className="slider-image-bg">
              <Link to={`/detail/${product.id}`}>
                <img src={imageUrl} alt="holiday" width={1550} height={1550} />
              </Link>
              <span className="slider-price-badge">
                <span>
                  {product.price &&
                    (product.price * (1 - product.sale / 100)).toLocaleString()}
                  원
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderSingle;
