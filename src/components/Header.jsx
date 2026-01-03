import logo from "../assets/SFC Infra Logo.jpg";
import TopBar from "./TopBar";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className="navbar-fixed">
      <TopBar />
      <header className={styles.header}>
        <div className={styles.logo} style={{ height: '50px' }}>
          <img src={logo} alt="SFC Logo" style={{ height: '100%', objectFit: 'contain' }} />
        </div>
        <nav className={styles.navLinks}>
          <a href="#stores">Stores</a>
          <a href="#cinema">Cinema</a>
          <a href="#foodcourt">Food Court</a>
          <a href="#events">Events</a>
          <a href="#offers">Offers</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </div>
  );
} 