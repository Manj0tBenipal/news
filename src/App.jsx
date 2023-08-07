import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import Trending from "./components/Trending/Trending";
import NavSidebar from "./components/NavigationSidebar/NavSidebar";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import topAnimeData from "./backupData.json";
import LoadingSpinner from "./components/LoadingSpinner";
import Share from "./components/Share/Share";
import Featured from "./components/Featured/Featured";
import MainContainer from "./components/MainContainer/MainContainer";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [topAnime, setTopAnime] = useState(topAnimeData.data);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [featuredDataFetched, setFeaturedDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://kitsu.io/api/edge/trending/anime";

      try {
        const response = await fetch(url);
        const result = await response.json();
        setTopAnime(result.data);
      } catch (error) {
        console.error(error);
        setTopAnime((prevData) => prevData);
      }

      setIsLoading(false);
    };
    fetchData();

    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition > 0 && isScrolled === false) {
        setIsScrolled(true);
      } else if (scrollPosition === 0) {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log("App rendered");
  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div
      className="app-container f-poppins"
      style={{
        overflow: sidebarIsOpen ? "hidden" : "auto",
        height: sidebarIsOpen ? "100vh" : "auto",
      }}
    >
      <Navbar
        isScrolled={isScrolled}
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />
      <NavSidebar
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />
      <Hero topAnime={topAnime} sidebarIsOpen={sidebarIsOpen} />
      <Trending topAnime={topAnime} />
      <Share />
      <ReviewSection />
      <Featured dataFetched={setFeaturedDataFetched} />
      {featuredDataFetched && <MainContainer />}
    </div>
  );
}
