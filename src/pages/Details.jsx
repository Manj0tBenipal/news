import React from "react";
import { useParams } from "react-router-dom";
import { useGetAnimeById } from "../hooks/useKitsu";
import AnimeInfo from "../components/AnimeInfo/AnimeInfo";
import Share from "../components/Share/Share";
export default function Details() {
  const params = useParams();
  const { data, isLoading } = useGetAnimeById(params.id);
  return (
    <>
    
      <AnimeInfo data={data} isLoading={isLoading} />
    </>
  );
}
