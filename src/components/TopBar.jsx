// src/components/TopBar.jsx
import styles from "./TopBar.module.css";
import { EMAIL, PHONE } from "../config/contact";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarContent}>
        <span>{EMAIL}</span>
        <span>{PHONE}</span>
      </div>
    </div>
  );
} 

