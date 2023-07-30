import "./App.css";
import Hero from "./components/HeroComponent/Hero";
import Navbar from "./components/Navbar/Navbar";
import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    function handleScroll() {
      if (container) {
        const scrollPosition = container.getBoundingClientRect().top;
        console.log(scrollPosition);
        setScrollPosition(scrollPosition);
      }
    }
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={containerRef} className="container">
      <Navbar isScrolled={scrollPosition > 0} />
      <Hero />
    </div>
  );
}
