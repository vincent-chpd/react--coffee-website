import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { TrendingSection } from "./Components/TrendingSection";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrendingSection />
    </>
  );
}
