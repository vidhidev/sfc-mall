import { useRef, useState } from "react";
import heroVideo from "../assets/Untitled video - Made with Clipchamp.mp4";

export default function Hero() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="hero pop-up-scroll">
      <video ref={videoRef} muted loop>
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

        <div className="play-button" onClick={togglePlayPause}>
          <span>{playing ? "❚❚" : "▶"}</span>
        </div>
      </div>
    </section>
  );
}
