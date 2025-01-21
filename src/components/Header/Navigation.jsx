import React from 'react'
import styles from './Navigation.module.css'
const Navigation = () => {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`${styles.nav} ${styles.desktopNav}`}>
      <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#home" className={styles.navLink}>Home</a></li>
          <li className={styles.navItem}><a href="#about" className={styles.navLink}>About</a></li>
          <li className={styles.navItem}><a href="#services" className={styles.navLink}>Services</a></li>
          <li className={styles.navItem}><a href="#contact" className={styles.navLink}>Contact</a></li>
      </ul>
  </nav>

  {/* Mobile Navigation */}
  <nav className={`${styles.nav} ${styles.mobileNav}`}>
      <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#home" className={styles.navLink}>🏠 Home</a></li>
          <li className={styles.navItem}><a href="#about" className={styles.navLink}>ℹ️ About</a></li>
          <li className={styles.navItem}><a href="#services" className={styles.navLink}>💼 Services</a></li>
          <li className={styles.navItem}><a href="#contact" className={styles.navLink}>📞 Contact</a></li>
      </ul>
  </nav>
  </>
  )
}

export default Navigation