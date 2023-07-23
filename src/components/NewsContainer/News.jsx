import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
import newsData from "../../example.json";
import "./newsContainer.css";

export class News extends Component {
  newsArticles = newsData.articles;
  constructor() {
    super();
    this.state = { articles: this.newsArticles, loading: false };
  }
  render() {
    const newsItems = this.state.articles.map((article) => {
      return <NewsItem key={article.title} article={article} />;
    });
    return <div className="news-container">{newsItems}</div>;
  }
}

export default News;
