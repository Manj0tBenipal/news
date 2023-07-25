import React from "react";
import NewsItem from "../AnimeMainCard/AnimeMainCard";
import "./newsContainer.css";
import backupData from "../../example.json";

export default function News() {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.jikan.moe/v4/anime";

      try {
        const response = await fetch(url);
        const result = await response.json();
        setArticles(result.data || backupData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  {
    const animeCards = articles.map((anime) => {
      return <NewsItem key={anime.title} article={anime} />;
    });
    return <div className="news-container">{animeCards}</div>;
  }
}
