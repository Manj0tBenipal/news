import "./App.css";
import Hero from "./components/HeroComponent/Hero";
import Navbar from "./components/Navbar/Navbar";
import React, { useState } from "react";
import Trending from "./components/Trending/Trending";

export default function App() {
  const [topAnime, setTopAnime] = useState([]);

  return (
    <div className="app-container">
      <Navbar />

      <Hero />
      <Trending />
    </div>
  );
}
