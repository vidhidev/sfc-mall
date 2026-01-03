import React from "react";
// Ensure this path exactly matches your folder structure
import usePopUpScroll from "./hooks/usePopUpScroll"; 

import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stores from "./components/Stores";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  // This line was causing the crash because the hook wasn't correctly linked
  usePopUpScroll(); 

  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <Stores />
      <Services />
      <About />
      <Contact />
    </>
  );
}