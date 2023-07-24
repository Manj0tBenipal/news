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
      "http://api.mediastack.com/v1/news?access_key=f553f07d194bd9848f3ca5b8689d9141";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.data });
  }
  render() {
    const newsItems = this.state.articles.map((article) => {
      return <NewsItem key={article.title} article={article} />;
    });
    return <div className="news-container">{newsItems}</div>;
  }
}

export default News;
