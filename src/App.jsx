import "./App.css";
import Hero from "./components/HeroComponent/Hero";
import Navbar from "./components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import Trending from "./components/Trending/Trending";
import data from "./backupData.json";

export default function App() {
  const [topAnime, setTopAnime] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://kitsu.io/api/edge/trending/anime";

      try {
        const response = await fetch(url);
        const result = await response.json();
        setTopAnime(result.data || data.data.json());
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="app-container">
      <Navbar />

      <Hero topAnime={topAnime} />
      <Trending topAnime={topAnime} />
    </div>
  );
}
