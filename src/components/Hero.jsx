import heroVideo from "../assets/Untitled video - Made with Clipchamp.mp4";

export default function Hero() {
  return (
    <section className="hero pop-up-scroll">
      <video id="bgVideo" muted loop>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-content pop-up-scroll">
        <h1>
          Welcome to <span style={{ color: "#650000" }}>S F C</span>
        </h1>

        <div className="btns">
          <a href="#stores" className="btn">Explore Stores</a>
          <a href="#events" className="btn">View Events</a>
        </div>

        <div className="play-button">
          <span id="playPauseBtn" style={{ fontSize: "2rem", color: "white" }}>
            ▶
          </span>
        </div>
      </div>
    </section>
  );
}
