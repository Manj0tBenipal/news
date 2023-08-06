import React, { useEffect, useState } from "react";
import topAiringData from "./data/topAiring.json";
import favoriteData from "./data/favorite.json";
import moviesData from "./data/movies.json";
import popularData from "./data/popular.json";
import LoadingSpinner from "../LoadingSpinner";
import ContentList from "./ContentList";
import "./featured.css";
export default function Featured() {
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [topAiring, setTopAiring] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);
  const [mostFavorite, setMostFavorite] = useState([]);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    let timeout1, timeout2, timeout3, timeout4;

    const fetchData = async (url, setData, defaultData) => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        if (response?.status !== 200) {
          throw new Error();
        }
        setData(result);
      } catch (error) {
        setData(defaultData);
      }
    };

    timeout1 = setTimeout(async () => {
      await fetchData(
        "https://api.jikan.moe/v4/top/anime?filter=airing&limit=5",
        setTopAiring,
        topAiringData
      );
    }, 500);

    timeout2 = setTimeout(async () => {
      await fetchData(
        "https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=5",
        setMostPopular,
        popularData
      );
    }, 1000);

    timeout3 = setTimeout(async () => {
      await fetchData(
        "https://api.jikan.moe/v4/top/anime?filter=favorite&limit=5",
        setMostFavorite,
        favoriteData
      );
    }, 1500);

    timeout4 = setTimeout(async () => {
      await fetchData(
        "https://api.jikan.moe/v4/top/anime?type=movie&filter=bypopularity&limit=5",
        setMovies,
        moviesData
      );
    }, 2000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
    };
  }, []);
  if (
    topAiring.data?.length > 0 &&
    mostFavorite.data?.length > 0 &&
    mostPopular.data?.length > 0 &&
    movies.data?.length > 0 &&
    dataIsLoaded === false
  ) {
    setDataIsLoaded(true);
  }

  return (
    <>
      {dataIsLoaded ? (
        <div className="featured-container d-flex">
          <ContentList heading="Top Airing" data={topAiring} />
          <ContentList heading="Most Popular" data={mostPopular} />
          <ContentList heading="Most Favorite" data={mostFavorite} />
          <ContentList heading="Top Movies" data={movies} />
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}
