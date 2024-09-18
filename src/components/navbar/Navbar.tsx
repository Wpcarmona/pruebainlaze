import React from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const image = "../../app/logo.png";
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoAndLinks}>
        <div className={styles.contentTitle}>
          <label className={styles.logotitle}>QuiCkbet</label>
          <div className={styles.icon}></div>
        </div>
        <span className={styles.link}>Popular</span>
        <span className={styles.link}>Favorites</span>
      </div>
      <div className={styles.userIcon}>
        <FontAwesomeIcon icon={faUser} />
      </div>
    </nav>
  );
};

export default Navbar;
