import React from "react";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./trending.css";
export default function Trending(props) {
  const anime = props.topAnime.map((el, idx) => {
    const item = el.attributes;
    return (
      <SwiperSlide>
        <div className="trending-slide">
          <div className="trending-item-sidebar">
            <p>{item.titles.en_jp.slice(0, 15) + "..."}</p>
            <span>{idx + 1}</span>
          </div>
          <a href="/">
            <img
              src={item.posterImage.original}
              className="trending-slide-img "
              alt="item.title"
            />
          </a>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <div className="trending-section-wrapper">
      <h2 className="section-header">Trending</h2>
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination]}
        breakpoints={{
          1900: {
            slidesPerView: 9,
            spaceBetween: 15,
          },
          1700: {
            slidesPerView: 8,
            spaceBetween: 15,
          },
          1600: {
            slidesPerView: 7,
            spaceBetween: 15,
          },
          1450: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 4,
          },
          200: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={5}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".btn-nextTwo",
          prevEl: ".btn-prevTwo",
        }}
      >
        {anime}
      </Swiper>
    </div>
  );
}
