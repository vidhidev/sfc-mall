import React from 'react';
import styles from './Services.module.css';

export default function Entertainment() {
  return (
    <section id="cinema" className={`${styles.section} pop-up-scroll`}>
      <div className={styles.container}>
        <h2>Entertainment</h2>

        <article>
          <h3>Multiplex</h3>
          <p><strong>Mukta A2 Cinemas</strong> (4-Screen Multiplex) — a modern cinema experience for blockbuster releases and family outings.</p>
        </article>

        <article>
          <h3>Fun Zone</h3>
          <ul>
            <li>Kids Play Area</li>
            <li>Gaming Zone</li>
            <li>VR Stations</li>
          </ul>
        </article>

        <article>
          <h3>Special Events</h3>
          <ul>
            <li>Weekend carnivals</li>
            <li>Seasonal festivals</li>
            <li>Live events</li>
            <li>Pop-up markets</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
