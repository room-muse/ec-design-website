import React from "react";
import styles from "./Canvas.module.css";
import { Piece } from "../../../types/piece";

interface CanvasProps {
  pieces: Piece[];
}

export default function Canvas({ pieces }: CanvasProps) {
  if (pieces.length === 0) {
    return (
      <div className={styles.canvas}>
        <div className={styles.emptyState}>
          <p className={styles.title}>Start building your sectional</p>
          <p className={styles.subtitle}>Select a piece from the panel below</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.canvas}>
      <div className={styles.pieceRow}>
        {pieces.map((piece, index) => (
          <div key={index} className={styles.pieceCard}>
            {piece.name}
          </div>
        ))}
      </div>
    </div>
  );
}