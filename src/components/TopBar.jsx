// src/components/TopBar.jsx
import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarContent}>
        <span>sfc.infracon@gmail.com</span>
        <span>+91 233 3550068</span>
      </div>
    </div>
  );
}

