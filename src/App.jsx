import "./App.css";
import Hero from "./components/HeroComponent/Hero";
import Navbar from "./components/Navbar/Navbar";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Hero />
      </div>
    );
  }
}
