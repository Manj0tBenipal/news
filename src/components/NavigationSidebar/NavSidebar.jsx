import React from "react";
import { FaChevronLeft, FaComments } from "react-icons/fa";
import "./nav-sidebar.css";
export default function NavSidebar(props) {
  return (
    <div
      className="navigation-sidebar f-poppins"
      style={{ zIndex: props.sidebarIsOpen ? 100 : -1 }}
    >
      <div
        className="navigation-list d-flex"
        style={{
          transform: props.sidebarIsOpen
            ? "translateX(250px)"
            : "translateX(-250px)",
        }}
      >
        <div className="button-group d-flex-fd-column">
          <label
            htmlFor="menu"
            style={{ width: "60%" }}
            onClick={() => props.setSidebarIsOpen()}
          >
            <FaChevronLeft size={12} />
            Close Menu
          </label>
          <a href="/" className="d-flex a-center j-center">
            <FaComments size={14} />
            Community
          </a>
        </div>
        <div className="navigation-link-list">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Subbed Anime</a>
            </li>
            <li>
              <a href="/">Dubbed Anime</a>
            </li>
            <li>
              <a href="/">Most Popular</a>
            </li>
            <li>
              <a href="/">Movies</a>
            </li>
            <li>
              <a href="/">TV Series</a>
            </li>
            <li>
              <a href="/">OVAs</a>
            </li>
            <li>
              <a href="/">ONAs</a>
            </li>
            <li>
              <a href="/">Specials</a>
            </li>
            <li>
              <a href="/">Events</a>
            </li>

            <li style={{padding: "20px"}}>
              Genre
              <div className="genre-list d-flex ">
                <span>Action</span>
                <span>Adenture</span>
                <span>Cars</span>
                <span>Comedy</span>
                <span>Dementia</span>
                <span>Demons</span>
                <span>Drama</span>
                <span>Ecchi</span>
                <span>Fantasy</span>
                <span>Game</span>
                <span>Harem</span>
                <span>Horror</span>
                <span>Isekai</span>
                <span>Josei</span>
                <span>Kids</span>
                <span>Magic</span>
                <span>Martial Arts</span>
                <span>Mecha</span>
                <span>Military</span>
                <span>Parody</span>
                <span>Police</span>
                <span>Psychological</span>
                <span>Romance</span>
                <span>Samurai</span>
                <span>School</span>
                <span>Sci-Fi</span>
                <span>Seinen</span>
                <span>Shojou</span>
                <span>Supernatural</span>
                <span>Shounen</span>
                <span>Space</span>
                <span>Thriller</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
