import React from "react";
import usePopUpScroll from "./hooks/usePopUpScroll"; 

import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Home from "./components/Home";

export default function App() {
  usePopUpScroll(); 

  return (
    <>
      <TopBar />
      <Header />
      <Home />
    </>
  );
}