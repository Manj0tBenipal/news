import React from "react";
import "./card.css";
export default function Card(props) {
  const anime = props.data;

  return (
    <div className="anime-card d-flex">
      <div className="anime-card-img-wrapper">
        <span className="rating">{anime.rating?.slice(0, 5)}</span>
        <span className="episode-count">CC:{anime.episodes || "Full"}</span>
        <img src={anime.images.webp.large_image_url} alt="anime-card" />
      </div>
      <div className="card-details">
        <span className="card-title">
          <a href={anime.trailer.url || "/"}>
            {anime.title_english?.length > 25
              ? anime.title_english?.slice(0, 25) + "..."
              : anime.title_english || anime.title}
          </a>
        </span>
        <div className="card-statistics">
          <span>
            {anime.duration === "Unknown"
              ? "TBA"
              : anime.duration.length > 7
              ? anime.duration.slice(0, 7)
              : anime.duration || "23m"}
          </span>
          <span>{anime.type || "TV"}</span>
        </div>
      </div>
    </div>
  );
}
