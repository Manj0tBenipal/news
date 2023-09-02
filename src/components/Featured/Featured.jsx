import React from "react";

import LoadingSpinner from "../LoadingSpinner";
import ContentList from "./ContentList";

import {
  useMostFavorite,
  useMostPopular,
  useTopAiring,
  useTopMovies,
} from "../../hooks/useJikan";

export default function Featured() {
  const topAiring = useTopAiring();
  const mostPopular = useMostPopular();
  const mostFavorite = useMostFavorite();
  const movies = useTopMovies();
  const isLoading =
    topAiring.isLoading &&
    mostPopular.isLoading &&
    mostFavorite.isLoading &&
    movies.isLoading;

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="featured-container d-flex">
      <ContentList heading="Top Airing" data={topAiring} />
      <ContentList heading="Most Popular" data={mostPopular} />
      <ContentList heading="Most Favorite" data={mostFavorite} />
      <ContentList heading="Top Movies" data={movies} />
    </div>
  );
}
