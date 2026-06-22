import React from 'react';
import styles from './button.module.css';

const Button = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        Get Started
      </button>
    </div>
  );
}

export default Button;