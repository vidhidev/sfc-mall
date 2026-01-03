import React from "react";
import styles from "./Stores.module.css";

const storesByCategory = {
  "Fashion & Lifestyle": ["Pantaloons", "Biba", "Go Colors", "Crocodile", "Unlimited"],
  Electronics: ["Reliance Digital", "Apple iStore"],
  Jewellery: ["Tanishq"],
  Footwear: ["Bata", "Liberty", "Puma"],
  "Grooming & Wellness": ["Jawed Habib Hair & Beauty Salon"],
};

export default function Stores() {
  return (
    <section id="stores" className={`${styles.section} pop-up-scroll`}>
      <div className={styles.container}>
        <h2>Stores</h2>
        <p className="muted" style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto 24px' }}>
          Explore our curated mix of fashion, electronics, jewellery, footwear and wellness brands.
        </p>

        <div className={styles.categoriesGrid}>
          {Object.entries(storesByCategory).map(([category, brands]) => (
            <div key={category} className={styles.categoryCard}>
              <h3>{category}</h3>
              <ul>
                {brands.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 