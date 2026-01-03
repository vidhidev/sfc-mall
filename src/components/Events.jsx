import React from 'react';
import styles from './Services.module.css';

export default function Events() {
  return (
    <section id="events" className={`${styles.section} pop-up-scroll`}>
      <div className={styles.container}>
        <h2>Events & Offers</h2>

        <ul>
          <li>Brand sales & promotions</li>
          <li>Cultural events</li>
          <li>Holiday specials</li>
          <li>Giveaways & lucky draws</li>
        </ul>

        <div id="offers" style={{ marginTop: 16 }}>
          <h3>Ongoing Offers</h3>
          <p>Check this section regularly for brand promotions and time-limited deals.</p>
        </div>
      </div>
    </section>
  );
}
