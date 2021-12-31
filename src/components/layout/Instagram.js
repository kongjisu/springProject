import React, { useEffect, useState } from 'react';
import InstaItem from '../ui/InstaItem';

function Instagram() {
  const [instaList, setInstaList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3005/Instagrams')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setInstaList(data);
      });
  }, []);

  return (
    <div className="instagram-area pt-110 pb-120">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="text-uppercase">Instagram</h2>
          <span>Elder_Story@insta.com</span>
        </div>
        <div className="row">
          {instaList.map((item) => (
            <InstaItem key={item.id} productId={item.productId} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Instagram;
