import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
import "./newsContainer.css";

export class News extends Component {
  constructor() {
    super();
    this.state = { articles: [], loading: false, page: 1 };
  }
  async componentDidMount() {
    let url =
      "https://newsdata.io/api/1/news?apikey=pub_26635720e3d09ab1aeff65b0e2e33c9278257&q=world&language=en";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.results });
  }
  render() {
    const newsItems = this.state.articles.map((article) => {
      return <NewsItem key={article.title} article={article} />;
    });
    return <div className="news-container">{newsItems}</div>;
  }
}

export default News;
