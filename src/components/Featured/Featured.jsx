import React, { useEffect, useState } from "react";
import {
  favoriteData,
  topAiringData,
  moviesData,
  popularData,
} from "../../data/featured";

import LoadingSpinner from "../LoadingSpinner";
import ContentList from "./ContentList";

import {
  useMostFavorite,
  useMostPopular,
  useTopAiring,
  useTopMovies,
  useHandleJikanResponse,
} from "../../hooks/useJikan";

export default function Featured() {
  const topAiring = useHandleJikanResponse(useTopAiring(), topAiringData);
  const mostPopular = useHandleJikanResponse(useMostPopular(), popularData);
  const mostFavorite = useHandleJikanResponse(useMostFavorite(), favoriteData);
  const movies = useHandleJikanResponse(useTopMovies(), moviesData);
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
