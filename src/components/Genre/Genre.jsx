import React, { useState } from "react";
import { useGenre, useHandleJikanResponse } from "../../hooks/useJikan";
import { genreData } from "../../data/genre";
import LoadingSpinner from "../LoadingSpinner";
import "./genre.css";
export default function Genre() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const genre = useHandleJikanResponse(useGenre(), genreData);
  const list = isCollapsed ? genre.data?.data.slice(0, 18) : genre.data?.data;
  const genreList = list?.map((el) => {
    return (
      <a
      
        key={el.mal_id}
        href={el.url}
      >
        {el.name}
      </a>
    );
  });
  return genre.isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="genre-wrapper ">
      <h2>Genre</h2>
      <div
        className="genre-list d-flex a-center j-center"
        style={
           { }
        }
      >
        {genreList}
        
          <button
            className="f-poppins trans-03"
            onClick={() => setIsCollapsed((prev) => !prev)}
          >
            {isCollapsed ? "Show More" : "Show Less"}
          </button>
        
      </div>
    </div>
  );
}
