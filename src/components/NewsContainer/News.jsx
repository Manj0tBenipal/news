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
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bc9af3735736477a953fd7c0d3beb4a4";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }
  render() {
    const newsItems = this.state.articles.map((article) => {
      return <NewsItem key={article.title} article={article} />;
    });
    return <div className="news-container">{newsItems}</div>;
  }
}

export default News;
