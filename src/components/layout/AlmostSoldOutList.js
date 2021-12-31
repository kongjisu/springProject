import React, { useEffect, useState } from 'react';
import AlmostSoldOutItem from '../ui/AlmostSoldOutItem';

function AlmostSoldOutList() {
  const [soldOutList, setSoldOutList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3005/productList')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const filter = data.filter((item) => item.stock < 10);
        setSoldOutList(filter);
        // for (let i = 0; i < data.length; i++) {
        //   if (data[i].stock < 10) {
        //     filter.push(data[i]);
        //   }
        // }
        //   data.forEach((item) => {
        //     if (item.stock < 10) {
        //       filter.push(item);
        //     }
        //   });
        //   setSoldOutList(filter);
        // });
      });
  }, []);

  return (
    <div className='news-area pt-115'>
      <div className='container'>
        <div className='section-title text-center pb-45'>
          <h2 className='text-uppercase'>Almost sold out</h2>
        </div>
        <div className='row'>
          {soldOutList &&
            soldOutList.map((almostSoldProduct) => (
              <AlmostSoldOutItem
                key={almostSoldProduct.id}
                productId={almostSoldProduct.productId}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default AlmostSoldOutList;
