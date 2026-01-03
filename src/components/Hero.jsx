import React from "react";
import heroImage from "../assets/hero.jpg";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section
      className={`${styles.hero} ${styles.heroImage}`}
      style={{
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.45),
          rgba(0,0,0,0.45)
        ), url(${heroImage})`,
      }}
    >
      <div className={styles.heroContent}>
        <h1>Sangli’s Ultimate Shopping & Entertainment Destination</h1>

        <p>
          Shopping · Food · Movies · Events
        </p>

        <div className={styles.heroButtons}>
          <button className={styles.btnPrimary}>Explore Mall</button>
          <button className={styles.btnSecondary}>View Stores</button>
        </div>
      </div>
    </section>
  );
}
