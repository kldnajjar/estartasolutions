import React from "react";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.main}>
      <div className={styles.fof}>
        <h1 className={styles.header}>Error 404</h1>
      </div>
    </div>
  );
}

export default NotFound;
