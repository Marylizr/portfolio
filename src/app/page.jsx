import DarkModeToggle from "../components/DarkModeToggle";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/navBar/NavBar";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Services from "./services/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
     
    </div>
  );
}
