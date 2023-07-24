import React, { Component } from "react";
import "./newsItem.css";
import defaultImage from "../../media/defaultNews.jpg";
export class NewsItem extends Component {
  render() {
    const { title, description, urlToImage, url } = this.props.article;

    return (
      <div className="card">
        <img
          src={urlToImage ? urlToImage : defaultImage}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className=" card-text">{description}</p>
          <a href={url} target="_blank" rel="noreferrer" className="button">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
