import React from 'react';
import styles from './Services.module.css';

export default function Dining() {
  return (
    <section id="foodcourt" className={`${styles.section} pop-up-scroll`}>
      <div className={styles.container}>
        <h2>Dining</h2>

        <article>
          <h3>Food Court</h3>
          <p>Multi-cuisine food court with seating suitable for families and groups — offering a wide range of choices to suit every taste.</p>
        </article>
      </div>
    </section>
  );
}
