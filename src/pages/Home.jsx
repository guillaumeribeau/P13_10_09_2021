import React from "react";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default Home;
