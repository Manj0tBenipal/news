import React, { useState, useEffect } from "react";
import data from "../../example.json";
import "./hero.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
export default function Hero() {
  const [topAnime, setTopAnime] = useState([]);
  const [slide, setSlide] = useState(0);
  const images = topAnime.map((item, idx) => {
    return (
      <div
        key={item.mal_id}
        className={idx === slide ? "slide" : "slide slide-hidden"}
      >
        <img
          className="carousel-img"
          src={item.images.jpg.large_image_url}
          alt={item.title}
        />
      </div>
    );
  });
  const nextslide = () => {
    setSlide(slide + 1);
  };
  const prevslide = () => {
    setSlide(slide - 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.jikan.moe/v4/top/anime";

      try {
        const response = await fetch(url);
        const result = await response.json();
        setTopAnime(result.data || data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevslide} />
      {images}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextslide}
      />
      <span className="indicators">
        {topAnime.map((_, idx) => {
          return (
            <button
              className={
                idx === slide ? "indicator" : "indicator indicator-inactive"
              }
              key={idx}
              onClick={null}
            />
          );
        })}
      </span>
    </div>
  );
}
