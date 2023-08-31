import React, { useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import "./AnimeInfo.css";
import { Link } from "react-router-dom";
import { FaEye, FaHeart, FaMedal, FaPlayCircle, FaPlus } from "react-icons/fa";
import Share from "../Share/Share";
export default function Details({ isLoading, data }) {
  const [descIsCollapsed, setDescIsCollapsed] = useState(true);
  const synonyms = data?.attributes?.abbreviatedTitles?.map((title) => (
    <span key={title}>{title},</span>
  ));
  return !isLoading ? (
    <div className="details-container">
      <div className="details-header">
        <div className="details-header-primary">
          <img
            className="details-container-background"
            src={
              data.attributes.coverImage?.small ||
              data.attributes.coverImage?.original ||
              data.attributes.coverImage?.large ||
              data.attributes.posterImage?.small ||
              data.attributes.posterImage?.original ||
              data.attributes.posterImage?.large
            }
          />
          <div className="anime-details d-flex">
            <img
              className="anime-details-poster"
              src={
                data.attributes.posterImage?.small ||
                data.attributes.posterImage?.original ||
                data.attributes.posterImage?.large ||
                data.attributes.coverImage?.small ||
                data.attributes.coverImage?.original ||
                data.attributes.coverImage?.large
              }
            />

            <div className="anime-details-content d-flex-fd-column">
              <h1 className="title-large">
                {data.attributes.titles.en || data.attributes.titles.en_jp}
              </h1>
              <div className="anime-statistics-tiles-wrapper d-flex a-center">
                <span className="anime-statistics-tile d-flex a-center j-center">
                  {data.attributes.ageRating || "NA"}
                </span>
                <span className="anime-statistics-tile d-flex a-center j-center">
                  <FaMedal /> - {data.attributes.popularityRank || "NA"}
                </span>
                <span className="anime-statistics-tile d-flex a-center j-center">
                  <FaHeart /> -{data.attributes.favoritesCount || "NA"}
                </span>
                <span className="anime-statistics-tile d-flex a-center j-center">
                  {" "}
                  <FaEye /> -{data.attributes.userCount || "NA"}
                </span>
                <span className="anime-statistics-tile d-flex a-center j-center">
                  HD
                </span>
              </div>
              <div className="button-wrapper">
                <button className="btn-primary hero-button">
                  <FaPlayCircle size={12} /> Watch Now
                </button>
                <button className="btn-secondary  hero-button">
                  Add to List <FaPlus size={12} />
                </button>
              </div>
              <p>
                {descIsCollapsed
                  ? data.attributes.description.slice(0, 350) + "..."
                  : data.attributes.description}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setDescIsCollapsed((prev) => !prev)}
                >
                  [ {descIsCollapsed ? "More" : "Less"} ]
                </span>
              </p>
              <Share style={{ padding: 0, margin: 0 }} />
            </div>
          </div>
        </div>
        <div className="details-header-secondary">
          <div className="details-header-statistics">
            <p>
              <b>Japanese:</b> {data.attributes.titles.ja_jp}
            </p>
            <p>
              <b>Synonyms:</b> {synonyms.length > 0 ? synonyms : "N/A"}
            </p>
            <p>
              <b>Aired:</b>
              {data.attributes.startDate + " to " + data.attributes.endDate ||
                "?"}
            </p>
            <p>
              <b>Duration:</b> {data.attributes.episodeLength || "?" + " min"}
            </p>
            <p>
              <b>Score:</b> {(data.attributes.averageRating / 10).toFixed(2)}
            </p>
          </div>
          <div className="details-header-genre">
            <p>
              <b>Genre: </b>
              <Link className="genre-button" to="/grid/1/Action">Action</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <LoadingSpinner />
  );
}
