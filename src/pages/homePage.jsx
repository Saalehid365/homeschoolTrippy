import React from "react";
import "./homePage.css";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, EffectFade, Autoplay } from "swiper";
import product1 from "../assest/1.jpg";
import product2 from "../assest/2.jpg";
import product3 from "../assest/4.jpg";
import "swiper/css/autoplay";

export const HomePage = () => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  return (
    <div className="home-container">
      <div className="Home-title">
        <p className="more-info">More information in less time</p>
        <p className="more-info-text">
          Welcome to Home-Ed Trippers this website helps the parents to get all
          the information of the upcoming trips and likewise it also shows new
          parents all our previous trips with our little trippers.
        </p>
      </div>
      <div className="slideshow-container">
        <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          effect={"fade"}
          speed={800}
          slidesPerView={1}
          autoplay={true} // {{delay:100}}
          loop
          className="custom-slide"
        >
          <SwiperSlide className="swiper-slide">
            <img src={product1} alt="slide1" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={product2} alt="slide1" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={product3} alt="slide1" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
