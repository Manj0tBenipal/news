import React from "react";
import Genre from "../components/Genre/Genre";
import TopTenAnime from "../components/TopTen/TopTenAnime";
import { Outlet } from "react-router-dom";
import Share from "../components/Share/Share";
export default function GenreSidebar() {
  return (
    <>
      <Share style={{ padding: 0, marginTop: 80 + "px", marginBottom: 0 }} />
      <div
        className=" main-container d-flex  "
        style={
          window.innerWidth < 1081 ? { flexDirection: "column-reverse" } : {}
        }
      >
        <div className="sidebar-wrapper d-flex-fd-column">
          <Genre />
          <TopTenAnime />
        </div>
        <Outlet />
      </div>
    </>
  );
}
