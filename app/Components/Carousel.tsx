"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slide1 from '@/public/slide-1.webp';
import slide2 from '@/public//slide-2.jpg';
import slide3 from '@/public/slide-3.webp';
import slide4 from '@/public/slide-4.jpg';
import slide5 from '@/public/slide-5.png';

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,       // Enable autoplay
    autoplaySpeed: 1000,  // Slide every 1 second (1000 milliseconds)
  };

  return (
    <div className="carousel-container w-full overflow-hidden">
      <Slider {...settings}>
        <div className="flex justify-center">
          <img className="w-full h-auto object-cover" src={slide1.src} alt="Slide 1" />
        </div>
        <div className="flex justify-center">
          <img className="w-full h-auto object-cover" src={slide2.src} alt="Slide 2" />
        </div>
        <div className="flex justify-center">
          <img className="w-full h-auto object-cover" src={slide3.src} alt="Slide 3" />
        </div>
        <div className="flex justify-center">
          <img className="w-full h-auto object-cover" src={slide4.src} alt="Slide 4" />
        </div>
        <div className="flex justify-center">
          <img className="w-full h-auto object-cover"src={slide5.src} alt="Slide 5" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
