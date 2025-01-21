import React from 'react'
import Navigation from './Navigation'

import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
    <div className={styles.logo}>
        MyWebsite
    </div>
    <Navigation />
  </header>
  )
}

export default Header