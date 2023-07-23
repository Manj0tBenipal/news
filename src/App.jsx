import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React, { Component } from "react";
import News from "./components/NewsContainer/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News />
      </div>
    );
  }
}
