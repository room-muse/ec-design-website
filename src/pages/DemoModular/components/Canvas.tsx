import React from "react";
import styles from "./Canvas.module.css";

export default function Canvas() {
  return (
    <div className={styles.canvas}>
      <div className={styles.emptyState}>
        <p className={styles.title}>Start building your sectional</p>
        <p className={styles.subtitle}>Select a piece from the strip below</p>
      </div>
    </div>
  );
}