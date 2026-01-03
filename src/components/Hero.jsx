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
        <h1>Sangli’s Premier Retail & Entertainment Destination Since 2009</h1>

        <p className={styles.lead}>
          A 1.5 Lakh sq. ft. experience with shopping, dining, cinema and family entertainment.
        </p>

        <div className={styles.heroButtons}>
          <a className={styles.btnPrimary} href="#services">Explore Mall</a>
          <a className={styles.btnSecondary} href="#stores">View Stores</a>
        </div>

        <ul className={styles.highlights} aria-label="Key highlights">
          <li className={styles.highlightCard}>1.5 Lakh Sq. Ft. Mall</li>
          <li className={styles.highlightCard}>4-Screen Multiplex</li>
          <li className={styles.highlightCard}>50+ National & International Brands</li>
          <li className={styles.highlightCard}>Green Building with Solar & Rainwater Harvesting</li>
          <li className={styles.highlightCard}>13,500+ Positive Reviews | Rated 4.2★</li>
        </ul>
      </div>
    </section>
  );
} 
