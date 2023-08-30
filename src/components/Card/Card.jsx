import React from "react";
import "./card.css";
export default function Card(props) {
  const anime = props.data;

  return (
    <div key={anime.mal_id} className="anime-card d-flex">
      <div className="anime-card-img-wrapper">
        <div className="tick-item">
          <span className="rating">{anime.rating?.slice(0, 5) || "PG-13"}</span>
          <span className="episode-count">CC:{anime.episodes || "Full"}</span>
        </div>

        <img src={anime.images.webp.image_url} alt="anime-card" />
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
              ? `${anime.season || "S:NA"}   ${anime.year || "Y:NA"}`
              : anime.duration.length > 7
              ? anime.duration.slice(0, 7)
              : anime.duration || "23m"}
          </span>
          <div className="dot"></div>
          <span>{anime.type || "TV"}</span>
        </div>
      </div>
    </div>
  );
}
