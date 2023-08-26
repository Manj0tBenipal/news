import React from "react";
import { FaChevronLeft, FaComments } from "react-icons/fa";
import "./nav-sidebar.css";
import Genre from "../Genre/Genre";
import Actions from "../Navbar/Actions";
export default function NavSidebar(props) {
  return (
    <div
      className="navigation-sidebar f-poppins"
      style={{ zIndex: props.sidebarIsOpen ? 100 : -1 }}
      onClick={() => props.setSidebarIsOpen(false)}
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
          <div
            className="d-flex a-center j-center close-menu"
            style={{ width: "60%" }}
            onClick={() => props.setSidebarIsOpen()}
          >
            <FaChevronLeft size={12} />
            Close Menu
          </div>
          <Actions isInSidebar={true} />
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
          </ul>
        </div>
      </div>
    </div>
  );
}
