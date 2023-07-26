import "./App.css";
import Hero from "./components/HeroComponent/Hero";
import Navbar from "./components/Navbar/Navbar";
import React, { Component } from "react";
import News from "./components/NewsContainer/News";

// import News from "./components/NewsContainer/News";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Hero />
        <News />
      </div>
    );
  }
}
