import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { TrendingSection } from "./Components/TrendingSection";
import { OfferSection } from "./Components/OfferSection";
import StorySection from "./Components/StorySection";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrendingSection />
      <OfferSection />
      <StorySection />
    </>
  );
}
