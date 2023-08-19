import React, { useEffect, useState } from "react";
import topAiringData from "./data/topAiring.json";
import favoriteData from "./data/favorite.json";
import moviesData from "./data/movies.json";
import popularData from "./data/popular.json";
import LoadingSpinner from "../LoadingSpinner";
import ContentList from "./ContentList";
import fetchData from "../../hooks/useKitsu";

export default function Featured(props) {
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [topAiring, setTopAiring] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);
  const [mostFavorite, setMostFavorite] = useState([]);
  const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   let timeout1, timeout2, timeout3, timeout4;
  //   timeout1 = setTimeout(async () => {
  //     await fetchData(
  //       "https://api.jikan.moe/v4/top/anime?filter=airing&limit=5",
  //       setTopAiring,
  //       topAiringData
  //     );
  //   }, 400);

  //   timeout2 = setTimeout(async () => {
  //     await fetchData(
  //       "https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=5",
  //       setMostPopular,
  //       popularData
  //     );
  //   }, 800);

  //   timeout3 = setTimeout(async () => {
  //     await fetchData(
  //       "https://api.jikan.moe/v4/top/anime?filter=favorite&limit=5",
  //       setMostFavorite,
  //       favoriteData
  //     );
  //   }, 1200);

  //   timeout4 = setTimeout(async () => {
  //     await fetchData(
  //       "https://api.jikan.moe/v4/top/anime?type=movie&filter=bypopularity&limit=5",
  //       setMovies,
  //       moviesData
  //     );
  //   }, 1600);

  //   return () => {
  //     clearTimeout(timeout1);
  //     clearTimeout(timeout2);
  //     clearTimeout(timeout3);
  //     clearTimeout(timeout4);
  //   };
  // }, []);
  if (
    topAiring.data?.length > 0 &&
    mostFavorite.data?.length > 0 &&
    mostPopular.data?.length > 0 &&
    movies.data?.length > 0 &&
    dataIsLoaded === false
  ) {
    setDataIsLoaded(true);
    props.dataFetched(true);
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
