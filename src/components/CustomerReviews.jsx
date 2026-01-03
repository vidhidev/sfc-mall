import React from 'react';
import styles from './Services.module.css';

export default function CustomerReviews() {
  return (
    <section id="reviews" className={`${styles.section} pop-up-scroll`}>
      <div className={styles.container}>
        <h2>Customer Reviews</h2>
        <div className={styles.reviewsIntro}>
          <p><strong>Average Rating:</strong> 4.2 / 5 ★ (13,500+ reviews)</p>
        </div>

        <article>
          <h3>Top Feedback</h3>
          <ul>
            <li>Excellent brand variety</li>
            <li>Perfect for family outings</li>
            <li>Great food and entertainment</li>
            <li>Clean and well-maintained</li>
            <li>Friendly staff and good ambiance</li>
          </ul>
        </article>

        <article>
          <h3>Improvement Areas</h3>
          <ul>
            <li>Paid parking management</li>
            <li>Washroom upkeep</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
