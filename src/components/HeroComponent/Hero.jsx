import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./backupData.json";
import "./hero.css";
import {
  FaCalendar,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaPlayCircle,
} from "react-icons/fa";

export default function Hero() {
  const [topAnime, setTopAnime] = useState(data.data);
  const heroSlide = topAnime.map((el, idx) => {
    const item = el.attributes;
    return (
      <div
        key={item.mal_id}
        className={`carousel-item ${idx === 0 ? "active" : ""}`}
        data-bs-interval="2300"
      >
        <div className="anime-info">
          <div className="anime-info-content">
            <span className="rank">#{idx + 1} Spotlight</span>
            <h1 className="anime-title">
              {item.titles.en || item.titles.en_jp}
            </h1>
            <div className="anime-statistics">
              <span className="anime-st-item">
                <FaPlayCircle size={14} />
                {item.subtype}
              </span>
              <span className="anime-st-item">
                <FaClock size={14} />
                {item.episodeLength + "m"}
              </span>

              <span className="anime-st-item">
                <FaCalendar size={13} /> {item.startDate}
              </span>
              <span className="anime-st-item">
                <span className="quality">HD</span>
                <span className="episode-count">
                  CC:{item.episodeCount || "Unknown"}
                </span>
              </span>
            </div>
            <p className="description">
              {(item.background && item.description.slice(0, 360) + "...") ||
                (item.synopsis && item.synopsis.slice(0, 360) + "...")}
            </p>
            <div className="button-wrapper">
              <button className="watch-button hero-button">
                {" "}
                <FaPlayCircle size={12} /> Watch Now
              </button>
              <button className="details-button hero-button">
                Details <FaChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>
        <img
          className="carousel-img"
          src={item.posterImage.original}
          alt={item.titles.en_jp || item.titles.en}
        />
      </div>
    );
  });

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://kitsu.io/api/edge/trending/anime";

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
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">{heroSlide}</div>
      <div className="carousel-controls-wrapper">
        <button
          className="carousel-controls carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <FaChevronLeft size={15} />
        </button>
        <button
          className="carousel-controls carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <FaChevronRight size={15} />
        </button>
      </div>
    </div>
  );
}
