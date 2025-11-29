import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Roadmap from "./components/Roadmap";
import CreativeServices from "./components/CreativeServices";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="">
        <Hero />
        <Story />
        <CreativeServices />
        <Roadmap />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;
