import React, { useEffect, useState } from 'react';

function InstaItem({ productId }) {
  const [instaproduct, setInstaProduct] = useState([]);
  const imageUrl = `./img/instagram/${instaproduct.instaImage}`;

  useEffect(() => {
    fetch(`http://localhost:3005/Instagrams/${productId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setInstaProduct(data);
      });
  }, [productId]);

  return (
    <div className="instagram-images d-flex pt-60">
      <div className="insta-imgs position-relative">
        <img src={imageUrl} alt="img" height={340} />
        <a href="index.html">
          <i className="lab la-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default InstaItem;
