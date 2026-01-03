import { useState } from "react";
import logo from "../assets/SFC Infra Logo.jpg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="SFC Logo" />
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="nav-toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      {/* Navigation */}
      <nav className={menuOpen ? "active" : ""}>
        <a href="#stores" onClick={closeMenu}>Stores</a>
        <a href="#events" onClick={closeMenu}>Events</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#aboutus" onClick={closeMenu}>About Us</a>
        <a href="#leasing" onClick={closeMenu}>Leasing</a>
        <a href="#careers" onClick={closeMenu}>Careers</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}
