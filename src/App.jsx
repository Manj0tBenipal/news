import "./App.css";
import Hero from "./components/HeroComponent/Hero";
import Navbar from "./components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import Trending from "./components/Trending/Trending";
import NavSidebar from "./components/NavigationSidebar/NavSidebar";
import data from "./backupData.json";

export default function App() {
  const [topAnime, setTopAnime] = useState(data.data);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
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
    <div
      className="app-container"
      style={{
        overflow: sidebarIsOpen ? "hidden" : "auto",
        height: sidebarIsOpen ? "100vh" : "auto",
      }}
    >
      <Navbar
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />
      <NavSidebar
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />
      <Hero topAnime={topAnime} sidebarIsOpen={sidebarIsOpen} />
      <Trending topAnime={topAnime} />
    </div>
  );
}
