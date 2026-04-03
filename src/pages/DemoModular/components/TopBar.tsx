import React from "react";
import styles from "./TopBar.module.css";

interface TopBarProps {
  pieceCount: number;
  totalPrice: number;
}

export default function TopBar({ pieceCount, totalPrice }: TopBarProps) {
  return (
    <div className={styles.topBar}>
      <span className={styles.title}>ModularONE</span>

      <div className={styles.right}>
        <span className={styles.pieceCount}>{pieceCount} pieces</span>
        <span className={styles.price}>${totalPrice.toLocaleString()}</span>
      </div>
    </div>
  );
}