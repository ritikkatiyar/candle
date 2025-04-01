"use client"

import { useRef } from "react";
import FeaturedProducts from "./components/FeaturedProducts";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  const featuredRef = useRef(null);

  const scrollToFeatured = () => {
    if (featuredRef.current) {
      featuredRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
    <Navbar/>
    <HeroSection onShopNowClick={scrollToFeatured}/>
    <FeaturedProducts refProp={featuredRef}/>
    </>
    
  );
}
