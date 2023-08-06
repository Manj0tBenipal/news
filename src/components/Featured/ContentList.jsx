import React from "react";
import "./content-list.css";
import { FaChevronRight } from "react-icons/fa";
export default function CategorieContainer(props) {
  const list = props.data.data.map((el, idx) => {
    return (
      <li className="d-flex a-center">
        <img src={el.images.webp.image_url} alt="poster" />
        <div className="anime-details d-flex-fd-column">
          <span className="title">
            <a
              rel="noreferrer"
              target="_blank"
              href={el.trailer.url}
              className="trans-03"
            >
              {el.title_english || el.title}
            </a>
          </span>
          <div className="episode-info d-flex f-ubuntu">
            <span className="episode-count">CC:{el.episodes || "NA"}</span>{" "}
            <span className="quality">{el.score}</span>
            <div className="show-type">{el.type}</div>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="category-container d-flex-fd-column">
      <h4>{props.heading}</h4>
      <ul>{list}</ul>
      <a href="/">
        View More
        <FaChevronRight size={14} />
      </a>
    </div>
  );
}
