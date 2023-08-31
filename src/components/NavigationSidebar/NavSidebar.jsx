import React from "react";
import { FaChevronLeft, FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./nav-sidebar.css";
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/grid?type=subbed">Subbed Anime</Link>
            </li>
            <li>
              <Link href="/">Dubbed Anime</Link>
            </li>
            <li>
              <Link href="/">Most Popular</Link>
            </li>
            <li>
              <Link href="/">Movies</Link>
            </li>
            <li>
              <Link href="/">TV Series</Link>
            </li>
            <li>
              <Link href="/">OVAs</Link>
            </li>
            <li>
              <Link href="/">ONAs</Link>
            </li>
            <li>
              <Link href="/">Specials</Link>
            </li>
            <li>
              <Link href="/">Events</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
