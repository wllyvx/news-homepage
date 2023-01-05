import React from "react";
import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

export default function SectionHeader() {
  return (
    <header>
      <Navbar />
      <Hero />
      <LatestNews />
    </header>
  );
}
