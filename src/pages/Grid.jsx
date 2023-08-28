import React from "react";
import "./main.css";

import { useParams } from "react-router-dom";
import { useGetAnimeByGenre, useHandleJikanResponse } from "../hooks/useJikan";
import { topAiringData } from "../data/featured";
import AnimeCollection from "../components/MainContainer/AnimeCollection";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Grid() {
  const params = useParams();
  const anime = useHandleJikanResponse(
    useGetAnimeByGenre(params.mal_id),
    topAiringData
  );

  return !anime.isLoading ? (
    <div className="collections-wrapper d-flex-fd-column a-center ">
      <AnimeCollection collectionName={params.name} data={anime} />
    </div>
  ) : (
    <LoadingSpinner />
  );
}
