import React, { useEffect, useState } from 'react';
import NewAreaBody from '../CompoNewArea/ui/NewAreaBody';

function NewArea() {
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
    <div className="news-area pt-115">
      <div className="container">
        <div className="section-title text-center pb-45">
          <h2 className="text-uppercase">Almost sold out</h2>
        </div>
        <div className="row">
          {productList.map((almostSoldProduct) => (
            <NewAreaBody
              key={almostSoldProduct.id}
              productId={almostSoldProduct.productId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewArea;
