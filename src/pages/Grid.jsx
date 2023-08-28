import React from "react";
import "./main.css";

import { useParams } from "react-router-dom";
import { useGetAnimeByGenre, useHandleJikanResponse } from "../hooks/useJikan";
import { topAiringData } from "../data/featured";
import AnimeCollection from "../components/MainContainer/AnimeCollection";
import LoadingSpinner from "../components/LoadingSpinner";
import Genre from "../components/Genre/Genre";
import TopTenAnime from "../components/TopTen/TopTenAnime";
export default function Grid() {
  const params = useParams();
  const anime = useHandleJikanResponse(
    useGetAnimeByGenre(params.mal_id),
    topAiringData
  );

  return (
    <div className="app-container f-poppins">
      <div className=" main-container d-flex ">
        {!anime.isLoading ? (
          <>
            <div className="sidebar-wrapper d-flex-fd-column">
              <Genre />
              <TopTenAnime />
            </div>
            <div className="collections-wrapper d-flex-fd-column a-center ">
              <AnimeCollection collectionName={params.name} data={anime} />
            </div>
          </>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
}
