import React, { useEffect, useState } from 'react';

function TrendItem({ trendId }) {
  const [trendproduct, setTrendproduct] = useState([]);
  const imageUrl = `./img/popular-categories/${trendproduct.trendImg}`;

  useEffect(() => {
    fetch(`http://localhost:3005/trends/${trendId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTrendproduct(data);
      });
  }, [trendId]);

  return (
    <div className="category-img-item first-items position-relative">
      <div className="cat-thumb overflow-hidden">
        <img src={imageUrl} alt="img1" width={380} height={450} />
      </div>

      <div className="category-texts ">
        <span>{trendproduct.trendName}</span>
        <p>{trendproduct.trendDetail}</p>
      </div>
    </div>
  );
}

export default TrendItem;
