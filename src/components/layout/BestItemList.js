import React, { useEffect, useState } from 'react';
import SectionTitle from '../widget/SectionTitle';
import Categories from '../widget/Categories';
import BestItem from '../ui/BestItem';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BestItemList() {
  const [productList, setProductList] = useState([]);
  const [filterItem, setFilterItem] = useState([]);
  
  const handleClick = (id) => {
    setFilterItem([]);
  
    if(typeof id === 'number') {
      axios.get(`http://localhost:8080/product/${id}`)
      .then(res => {
        setFilterItem(res.data);
    })
    }
    
  };

  useEffect(() => {
    axios.get('http://localhost:8080/product/getAll')
      .then((res) => {
        setProductList(res.data);
      });
  }, []);

  return (
    <>
      <div className="new-arrival pt-110 ">
        <div className="container">
          <SectionTitle title="BEST" />
          <Categories handleClick={handleClick} />
          <div className="arrival-product pt-45">
            <div className="row grid">
              {filterItem.length === 0
                ? productList.map((product) => (
                    <BestItem key={product.id} productId={product.id} />
                  ))
                : filterItem.map((product) => (
                    <BestItem key={product.id} productId={product.id} />
                  ))}
            </div>
          </div>
          <div className="row">
            <div className="view-items ml-auto mr-auto mt-50">
              <a className="p-btn position-relative" href="shop_grid.html">
                <Link to="/ProductAll">
                  <span>Load more</span>
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestItemList;
