// Inside App.jsx return statement
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

      {/* New Sticky Info Component */}
      <div className="sticky-info">
        <i className="fas fa-clock"></i>
        <span>Open Today: 10AM - 10PM</span>
        <span style={{opacity: 0.3}}>|</span>
        <a href="#contact"><i className="fas fa-map-marker-alt"></i> Location</a>
      </div>
    </>
  );
}