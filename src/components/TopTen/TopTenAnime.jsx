import React from "react";
import "./top-ten.css";
import { useTrendingAnime } from "../../hooks/useKitsu";
import topAnimeData from "../../data/topAnime";
export default function TopTenAnime() {
  const { isError, data } = useTrendingAnime();
  const anime = isError || data === undefined ? topAnimeData : data?.data;
  const list = anime.data.map((el, idx) => {
    const title = el.attributes.titles.en || el.attributes.titles.en_jp;
    return (
      <li className="d-flex a-center">
        <span
          className={`rank ${0 < idx + 1 && idx + 1 <= 3 ? "top-three" : ""}`}
        >
          {idx + 1 > 9 ? idx + 1 : "0" + (idx + 1)}
        </span>
        <div className="top-10-item d-flex a-center">
          <img src={el.attributes.posterImage.tiny} alt="poster" />
          <div className="anime-details d-flex-fd-column">
            <span className="title">
              <span className="trans-03">
                {title.length > 30 ? title.slice(0, 30) : title}
              </span>
            </span>
            <div className="episode-info d-flex ">
              <span className="episode-count">CC:{el.episodes || "NA"}</span>
              <span className="quality">
                {(parseFloat(el.attributes.averageRating) / 10).toFixed(2)}
              </span>
              <div className="show-type">{el.attributes.subtype}</div>
            </div>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="top-ten-wrapper">
      <div className="top-ten-header d-flex a-center">
        <h2>Top 10</h2>
        <div className="top-ten-tabs">
          <button>Anime</button>
          <button>Manga</button>
        </div>
      </div>
      <ul>{list}</ul>
    </div>
  );
}
