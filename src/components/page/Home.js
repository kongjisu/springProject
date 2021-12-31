import React from 'react';
import Instagram from '../layout/Instagram';
import Trend from '../layout/Trend';
import TodayDeal from '../layout/TodayDeal';
import BestItemList from '../layout/BestItemList';
import AlmostSoldOutList from '../layout/AlmostSoldOutList';
import SliderList from '../layout/SliderList';

function Home() {
  return (
    <>
      <SliderList />
      <Trend />
      <BestItemList />
      <TodayDeal />
      <AlmostSoldOutList />
      <Instagram />
    </>
  );
}

export default Home;
