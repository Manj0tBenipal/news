import "./App.css";
import Hero from "./components/HeroComponent/Hero";
import Navbar from "./components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import Trending from "./components/Trending/Trending";
import NavSidebar from "./components/NavigationSidebar/NavSidebar";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import data from "./backupData.json";
import { FaSpinner } from "react-icons/fa";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [topAnime, setTopAnime] = useState(data.data);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://kitsu.io/api/edge/trending/anime";

      try {
        const response = await fetch(url);
        const result = await response.json();
        setTopAnime(result.data || data.data.json());
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return isLoading ? (
    <div className="loading-container">
      <FaSpinner size={30} className="spinner" color="white" />
      <h3 style={{ color: "white", fontFamily: "Poppins" }}>Loading...</h3>
    </div>
  ) : (
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
      <ReviewSection />
    </div>
  );
}
