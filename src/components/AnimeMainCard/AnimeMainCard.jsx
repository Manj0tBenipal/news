import React from "react";
import "./anime-main-card.css";
import defaultImage from "../../media/defaultNews.jpg";
export default function NewsItem(props) {
  const article = props.article;
  const {
    synopsis,
    url,
    title_english,
    title,
    type,
    status,
    episodes,
    duration,
    rank,
    rating,
  } = article;

  const image_url = article.images.webp.large_image_url;
  console.log("rendered");
  return (
    <a href={url} target="_blank" rel="noreferrer" className="card">
      <div className="tags">
        <span className="show-type tag">{type}</span>
        <span className="rating tag">{rating}</span>
      </div>

      <img
        src={image_url ? image_url : defaultImage}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title_english || title}</h5>

        <p className=" card-text">{synopsis}</p>
        <div className="more-info">
          <span className="info-badge f-ubuntu">{status}</span>
          <span className="info-badge f-ubuntu">episodes:{episodes}</span>
          <span className="info-badge f-ubuntu">Score:{episodes}</span>
          <span className="info-badge f-ubuntu">Rank:{rank}</span>
          <span className="info-badge f-ubuntu">Duration:{duration}</span>
        </div>
      </div>
    </a>
  );
}
