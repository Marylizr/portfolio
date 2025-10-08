"use client";

import DarkModeToggle from "../components/DarkModeToggle";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/NavBar";
import About from "../components/About";
import Portfolio from "./portfolio/page";
import Services from "./services/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
    </div>
  );
}
