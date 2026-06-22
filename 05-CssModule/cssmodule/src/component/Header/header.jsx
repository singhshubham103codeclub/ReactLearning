import React from 'react';
import styles from './headr.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <h1 className={styles.title}>CSS Modules</h1>
        <p className={styles.tag}>Scoped, maintainable styles</p>
      </div>
      <div className={styles.actions} >
        <button className={styles.button}>Home</button>
        <button className={styles.button}>About</button>
        <button className={styles.button}>Contact</button>
      </div>    
    </header>
  );
}

export default Header;