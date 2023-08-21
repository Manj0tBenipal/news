import React, { useState } from "react";
import { useGenre, useHandleJikanResponse } from "../../hooks/useJikan";
import { genreData } from "../../data/genre";
import LoadingSpinner from "../LoadingSpinner";
import "./genre.css";
export default function Genre({ isInNavbar }) {
  const [isCollapsed, setIsCollapsed] = useState(isInNavbar ? false : true);
  const genre = useHandleJikanResponse(useGenre(), genreData);
  const list = isCollapsed ? genre.data?.data.slice(0, 18) : genre.data?.data;
  const styles = {
    width: isInNavbar ? "100px" : "50%",
  };
  const genreList = list?.map((el) => {
    return (
      <a
        style={
          !isInNavbar ? { fontSize: "15px", width: "calc(33% - 15px)" } : {}
        }
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
      {!isInNavbar && <h2>Genre</h2>}
      <div
        className="genre-list d-flex a-center j-center"
        style={isInNavbar ? {} : { padding: "10px",  background: "rgba(255, 255, 255, 0.1)" }}
      >
        {genreList}
        {!isInNavbar && (
          <button className="f-poppins trans-03" onClick={() => setIsCollapsed((prev) => !prev)}>
            {isCollapsed ? "Show More" : "Show Less"}
          </button>
        )}
      </div>
    </div>
  );
}
