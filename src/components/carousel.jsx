import React, { useState } from "react";
import carouselImage from "./images/Rectangle-2013.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination} from 'swiper/modules';


// Import Swiper styles
import 'swiper/swiper-bundle.css';
const Carousel = () => {

  return (
    <div className="carousel-container">
        <Swiper
          modules={[Mousewheel, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          mousewheel
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className="slide">
            <img src={carouselImage} alt="" />
            <div className="slide-info">
                <h2>Lorem Ipsum</h2>
                <p>Voluptates sint quae labore necessitatibus </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src={carouselImage} alt="" />
            <div className="slide-info">
                <h2>Lorem Ipsum</h2>
                <p>Voluptates sint quae labore necessitatibus </p>
            </div>
          </SwiperSlide >
          <SwiperSlide className="slide">
            <img src={carouselImage} alt="" />
            <div className="slide-info">
                <h2>Lorem Ipsum</h2>
                <p>Voluptates sint quae labore necessitatibus </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src={carouselImage} alt="" />
            <div className="slide-info">
                <h2>Lorem Ipsum</h2>
                <p>Voluptates sint quae labore necessitatibus </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src={carouselImage} alt="" />
            <div className="slide-info">
                <h2>Lorem Ipsum</h2>
                <p>Voluptates sint quae labore necessitatibus </p>
            </div>
          </SwiperSlide>
          
        </Swiper>
    </div>
  );
};

export default Carousel;
