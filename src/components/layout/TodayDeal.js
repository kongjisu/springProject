import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TodayDeal() {
  const [todayDeal, setTodayDeal] = useState([]);

  useEffect(() => {
    const url = `http://localhost:3005/todayDeal/${
      (Math.floor(Math.random() * 10) % 2) + 1
    }`;
    axios.get(url).then((Response) => {
      setTodayDeal(Response.data);
    });
  }, []);

  console.log(todayDeal);

  return (
    <div className="today-deal pt-115">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
            <div className="deal-details pt-90">
              <span>Today's Deal</span>
              <h2>{todayDeal.productName}</h2>
              {todayDeal.price && (
                <div className="price">
                  <del className="mr-5">
                    {todayDeal.price.toLocaleString()}원
                  </del>
                  <span>
                    {(
                      todayDeal.price *
                      (1 - todayDeal.sale / 100)
                    ).toLocaleString()}
                    원
                  </span>
                </div>
              )}
              <p className="pr-90">{todayDeal.productDetail}</p>
              <div id="countdown" className="d-flex pb-40">
                <div className="cd-box d-flex">
                  <div className="d-inline-block">
                    <span className="numbers days">00</span>
                    <span className="strings timeRefDays">Days</span>
                  </div>
                  <span className="colon ml-20 mr-20 mt-15">:</span>
                </div>
                <div className="cd-box d-flex">
                  <div>
                    <span className="numbers hours">00</span>
                    <span className="strings timeRefHours">Hours</span>
                  </div>
                  <span className="colon ml-20 mr-20 mt-15">:</span>
                </div>
                <div className="cd-box d-flex">
                  <div>
                    <span className="numbers minutes">00</span>
                    <span className="strings timeRefMinutes">Mins</span>
                  </div>
                  <span className="colon ml-20 mr-20 mt-15">:</span>
                </div>
                <div className="cd-box">
                  <div>
                    <span className="numbers seconds">00</span>
                    <span className="strings timeRefSeconds">Secs</span>
                  </div>
                </div>
              </div>
              <a className="p-btn position-relative" href="index.html">
                <Link to={`/detail/${todayDeal.id}`}>
                  <span>Load more</span>
                </Link>
              </a>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12">
            <div className="today-deal-img deal-img-position  text-center position-relative">
              <img
                src={`./img/deals/${todayDeal.productTitleImage}`}
                alt="product"
              />
              <span className="deal-badge slider-price-badge ">
                <span>{todayDeal.sale}% Discount</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodayDeal;
