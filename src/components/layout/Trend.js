import React, { useEffect, useState } from 'react';
import TrendItem from '../ui/TrendItem';

function Trend() {
  const [TrendList, setTrendList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3005/Trends')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTrendList(data);
      });
  }, []);

  return (
    <div className="popular-category-area pt-110">
      <div className="container">
        <div className="section-title text-center pb-45">
          <h2>Trend</h2>
        </div>
        <div className="row">
          {TrendList.map((item) => (
            <TrendItem key={item.id} trendId={item.trendId} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trend;
