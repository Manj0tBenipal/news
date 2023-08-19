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
} from "../../hooks/jikan";

export default function Featured(props) {
  function handleResponse(response, backupData) {
    const data = response.isError ? backupData : response.data?.data;
    return data;
  }
  const topAiring = handleResponse(useTopAiring(), topAiringData);
  const mostPopular = handleResponse(useMostPopular(), popularData);
  const mostFavorite = handleResponse(useMostFavorite(), favoriteData);
  const movies = handleResponse(useTopMovies(), moviesData);
  const isLoading =
    topAiring?.isLoading &&
    mostPopular?.isLoading &&
    mostFavorite?.isLoading &&
    movies?.isLoading;

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
