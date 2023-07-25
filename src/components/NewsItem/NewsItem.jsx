import React from "react";
import "./newsItem.css";
import defaultImage from "../../media/defaultNews.jpg";
export default function NewsItem(props) {
  const articles = props.article;
  const { review, url } = articles;
  const { title } = articles.entry;
  const user = articles.user;
  const userImg = user.images.jpg.image_url;
  const userName = user.username;
  const image_url = articles.entry.images.webp.large_image_url;

  return (
    <a href={url} target="_blank" rel="noreferrer" className="card">
      <img
        src={image_url ? image_url : defaultImage}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className=" card-text">{review}</p>
        <div className="author">
          <img src={userImg} alt="author-profile-pic" />
          <p>{userName}</p>
        </div>
        <div className="rating">
          <span class="fa fa-star "></span>
          
        </div>
      </div>
    </a>
  );
}
