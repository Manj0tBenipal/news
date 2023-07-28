import React, { Component } from "react";
import "./navbar.css";
import logo from "../../media/logo.png";
import burgerIcon from "../../media/burger-icon.png";
import { FaSearch, FaFilter } from "react-icons/fa";
export class Navbar extends Component {
  render() {
    return (
      <nav className="navigation-bar a-center d-flex">
        <input hidden type="checkbox" id="menu" />
        <div className="menu-group a-center d-flex">
          <img src={burgerIcon} className="menu-icon" alt="bugerr-icon" />
          <div className="logo-wrapper a-center d-flex">
            <img src={logo} className="logo" alt="logo" />
            <h2 className="logo-text">
              war<span className="logo-text-red">Ding</span>
            </h2>
          </div>
        </div>
        <div className="search-wrapper">
          <input
            type="text"
            className="search-text f-poppins"
            placeholder="Search anime..."
          />
          <FaSearch
            className="search-icon search-icons"
            size={20}
            color="grey"
          />
          <FaFilter
            className="filter-icon search-icons"
            size={20}
            color="grey"
          />
        </div>
      </nav>
    );
  }
}

export default Navbar;
