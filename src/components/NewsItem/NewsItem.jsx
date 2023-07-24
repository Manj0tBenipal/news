import React, { Component } from "react";
import "./newsItem.css";
import defaultImage from "../../media/defaultNews.jpg";
export class NewsItem extends Component {
  render() {
    const { title, description, image_url, url } = this.props.article;

    return (
      <a href={url} target="_blank" rel="noreferrer" className="card">
        <img
          src={image_url ? image_url : defaultImage}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className=" card-text">{description}</p>
        </div>
      </a>
    );
  }
}

export default NewsItem;
