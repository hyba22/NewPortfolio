import React, { useState } from 'react';
import styles from './navbar.module.css';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <IoMenu 
          className={styles.menuBtn} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu" // Accessibility improvement
          aria-expanded={menuOpen} // Accessibility improvement
        />
        <ul 
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMenuOpen(false)} 
        >
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experiences</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;