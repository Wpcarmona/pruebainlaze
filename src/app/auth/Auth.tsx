'use client';

import React, { useState } from 'react';
import styles from './Auth.module.css';

const Auth: React.FC = () => {
  const [isRegister, setIsRegister] = useState<boolean>(true);

  const handleToggle = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <div className={styles.buttons}>
            <button
              className={`${styles.button} ${isRegister ? styles.active : ""}`}
              onClick={handleToggle}
            >
              Register
            </button>
            <button
              className={`${styles.button} ${!isRegister ? styles.active : ""}`}
              onClick={handleToggle}
            >
              Login
            </button>
          </div>
          {isRegister ? (
            <form className={styles.form}>
              <h2>Register</h2>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <input type="tel" placeholder="Phone" required />
              <button type="submit">Register</button>
            </form>
          ) : (
            <form className={styles.form}>
              <h2>Login</h2>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
          )}
        </div>
        {isRegister ? (
          <div className={styles.infoContainer}>
            <div className={styles.infoText}>
              <h2>Welcome to Quickbet Movies!</h2>
              <p>
                🎬 Ready to unlock a universe of cinematic delights? Sign up now
                and start your journey with us!
              </p>
            </div>
            <div className={styles.imageRegister} />
          </div>
        ) : (
          <div className={styles.infoContainer}>
            <div className={styles.infoText}>
              <h2>Welcome back to Quickbet Movies!</h2>
              <p>
                🍿 Ready to dive into the world of unlimited entertainment?
                Enter your credentials and let the cinematic adventure begin!
              </p>
            </div>
            <div className={styles.imageLogin} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
