import React, { useEffect, useRef, useState } from 'react';
import SliderSingle from '../ui/SliderSingle';
import Slider from 'react-slick';

const style = {
  fontSize: '32px',
  color: '#282828',
  cursor: 'pointer',
  position: 'absolute',
  top: '51%',
  zIndex: '33',
};

function SliderList() {
  const [sliderList, setSliderList] = useState([]);
  const [isActive, setIsActive] = useState([true, false]);
  // const [current, setCurrent] = useState(0)
  const ref = useRef();

  const NextArrow = () => {
    return (
      <div
        style={{ ...style, right: '40px' }}
        onClick={() => ref.current.slickNext()}
      >
        <i className="las la-arrow-right"></i>
      </div>
    );
  };

  const PrevArrow = () => {
    return (
      <div style={style} onClick={() => ref.current.slickPrev()}>
        <i className="las la-arrow-left"></i>
      </div>
    );
  };
  const settings = {
    dots: false,
    arrows: true,
    fade: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 10000,
    speed: 400,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      setIsActive(isActive.map((active, idx) => idx === next));
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  useEffect(() => {
    fetch('http://localhost:3005/Sliders')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSliderList(data);
      });
  }, []);
  return (
    <div className="slider-area pt-105">
      <Slider {...settings} ref={ref}>
        {sliderList.map((item, idx) => (
          <SliderSingle
            key={item.id}
            productId={item.productId}
            isActive={isActive}
            idx={idx}
          />
        ))}
      </Slider>
    </div>
  );
}

export default SliderList;
