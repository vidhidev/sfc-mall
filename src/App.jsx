import usePopUpScroll from "./hooks/usePopUpScroll";

import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stores from "./components/Stores";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
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
