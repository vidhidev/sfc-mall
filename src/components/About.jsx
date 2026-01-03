import director1 from "../assets/sukumar-chougule.jpg";
import director2 from "../assets/walchand-chougle.jpg";

import styles from "./About.module.css";

export default function About() {
  return (
    <section id="aboutus" className={`${styles.section} pop-up-scroll`}>
      <h2>About SFC Lifestyle</h2>

      <p>
        SFC Megaa Mall has introduced mall culture in its true sense to Sangli.
        With a unique ambience and modern facilities, it is the pride of the city.
      </p>

      <div className={styles.visionMission}>
        <div className={`${styles.visionBox} pop-up-scroll`}>
          <h4>Vision</h4>
          <p>
            To be the most respected leader in the construction industry by
            delivering high-quality projects.
          </p>
        </div>

        <div className={`${styles.visionBox} pop-up-scroll`}>
          <h4>Mission</h4>
          <p>
            To build long-term relationships through integrity and performance.
          </p>
        </div>
      </div>

      <div className={styles.directors}>
        <div className={`${styles.directorCard} pop-up-scroll`}>
          <img src={director1} />
          <h4>Mr. Sukumar F. Chougule</h4>
          <p><strong>Chairman</strong></p>
        </div>

        <div className={`${styles.directorCard} pop-up-scroll`}>
          <img src={director2} />
          <h4>Mr. Walchand S. Chougule</h4>
          <p><strong>Director</strong></p>
        </div>
      </div>
    </section>
  );
}
