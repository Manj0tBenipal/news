import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import Trending from "./components/Trending/Trending";
import NavSidebar from "./components/NavigationSidebar/NavSidebar";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import Share from "./components/Share/Share";
import Featured from "./components/Featured/Featured";
import MainContainer from "./components/MainContainer/MainContainer";
import { useAnimeReviews, useMangaReviews } from "./hooks/jikan";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [featuredDataFetched, setFeaturedDataFetched] = useState(false);
  const animeReviews = useAnimeReviews();
  const mangaReviews = useMangaReviews();

  useEffect(() => {
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

  return (
    <div
      className="app-container f-poppins"
      style={{
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
      <Hero sidebarIsOpen={sidebarIsOpen} />
      <Trending />
      <Share />
      <ReviewSection />
      <Featured />
      <MainContainer />
    </div>
  );
}
