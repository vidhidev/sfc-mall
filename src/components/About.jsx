import director1 from "../assets/sukumar-chougule.jpg";
import director2 from "../assets/walchand-chougle.jpg";

import styles from "./About.module.css";

export default function About() {
  return (
    <section id="aboutus" className={`${styles.section} pop-up-scroll`}>
      <h2>About Us</h2>

      <article className={styles.aboutBlock}>
        <h3>SFC Megaa Mall</h3>
        <p>
          Established in 2009, SFC Megaa Mall is the first and leading mall in Sangli,
          bringing a metro-style shopping and entertainment experience to South and
          West Maharashtra. Strategically located in the heart of Sangli, the mall spans
          1.5 lakh sq. ft. and houses top brands, a multiplex, fitness center, food court,
          and green infrastructure.
        </p>
      </article>

      <article className={styles.aboutBlock}>
        <h3>SFC Lifestyles Pvt. Ltd.</h3>
        <p>
          Managed by SFC Lifestyles Pvt. Ltd., a specialized entity focused on mall operations,
          tenant curation, facility management, and innovation. Led by Mr. S.F. Chougule and
          Mr. Walchand Chougule, the company ensures a modern, customer-centric, and
          technologically advanced shopping environment.
        </p>
      </article>

      <article className={styles.aboutBlock}>
        <h3>SFC Group</h3>
        <p>
          SFC Lifestyles is part of the SFC Group, founded in 1987, with 50+ completed real estate
          and infrastructure projects across Maharashtra.
        </p>
        <h4>Subsidiaries include:</h4>
        <ul>
          <li>SFC Infracon</li>
          <li>M/s. S.F. Chougule (Class 1 Unlimited Government Contractor)</li>
        </ul>
      </article>

      <div className={styles.directors}>
        <div className={`${styles.directorCard} pop-up-scroll`}>
          <img src={director1} alt="Mr. S.F. Chougule" />
          <h4>Mr. S.F. Chougule</h4>
          <p><strong>Chairman</strong></p>
        </div>

        <div className={`${styles.directorCard} pop-up-scroll`}>
          <img src={director2} alt="Mr. Walchand Chougule" />
          <h4>Mr. Walchand Chougule</h4>
          <p><strong>Director</strong></p>
        </div>
      </div>
    </section>
  );
} 
