import React from 'react';
import styles from './Services.module.css';

export default function InvestorRelations() {
  return (
    <section id="investors" className={`${styles.section} pop-up-scroll`}>
      <div className={styles.container}>
        <h2>Investor Relations</h2>
        <article>
          <h3>Highlights</h3>
          <ul>
            <li>Established market leader since 2009</li>
            <li>3 stable revenue streams: Rent, CAM, Advertising</li>
            <li>50+ premium brands with long-term leases</li>
            <li>Innovative, sustainable & community-focused model</li>
          </ul>
        </article>

        <article>
          <h3>Future Growth</h3>
          <ul>
            <li>Co-working spaces</li>
            <li>Loyalty app</li>
            <li>Delivery partnerships</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
