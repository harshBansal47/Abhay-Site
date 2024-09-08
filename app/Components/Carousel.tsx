"use client"
import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src="https://via.placeholder.com/600x400" alt="Slide 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x400" alt="Slide 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x400" alt="Slide 3" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x400" alt="Slide 4" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x400" alt="Slide 5" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
