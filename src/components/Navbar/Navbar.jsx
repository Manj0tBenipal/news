import React, { Component } from "react";
import "./navbar.css";
export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <input hidden type="checkbox" id="menu" />
        <label htmlFor="menu" className="material-symbols-outlined burger-icon">
          menu
        </label>
        <label className="logo f-ubuntu">Tanjiro</label>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Explore</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
