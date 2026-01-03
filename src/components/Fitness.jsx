import React from 'react';
import styles from './Services.module.css';

export default function Fitness() {
  return (
    <section id="fitness" className={`${styles.section} pop-up-scroll`}>
      <div className={styles.container}>
        <h2>Fitness & Wellness</h2>

        <article>
          <h3>Gold's Gym</h3>
          <p>State-of-the-art fitness facilities with professional trainers and modern equipment to support health and wellness goals.</p>
        </article>
      </div>
    </section>
  );
}
