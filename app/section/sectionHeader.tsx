import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

export default function SectionHeader() {
  return (
    <header>
      <Navbar />
      <div className="block md:flex md:justify-center md:items-start md:gap-8">
        <Hero />
        <LatestNews />
      </div>
    </header>
  );
}
