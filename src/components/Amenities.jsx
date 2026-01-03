import React from 'react';
import styles from './Services.module.css';

export default function Amenities() {
  const amenities = [
    'Central location in Sangli',
    'Ample parking space',
    'Escalators & elevators',
    'Air-conditioned showrooms',
    '24x7 security & CCTV',
    'Clean washrooms',
    'Rainwater harvesting system',
    'Solar power plant'
  ];

  return (
    <section id="amenities" className={`${styles.section} pop-up-scroll`}>
      <div className={styles.container}>
        <h2>Amenities</h2>
        <div className={styles.amenitiesGrid}>
          {amenities.map((a) => (
            <div key={a} className={styles.amenityItem}>• {a}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
