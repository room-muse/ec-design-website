import React from "react";
import { Piece } from "../../../types/piece";
import styles from "./PieceStrip.module.css";

interface PieceStripProps {
  onPieceClick: (piece: Piece) => void;
}

export default function PieceStrip({ onPieceClick }: PieceStripProps) {
  const PIECES: Piece[] = [
    { name: "Left Arm" },
    { name: "Middle" },
    { name: "Corner" },
    { name: "Right Arm" },
    { name: "Ottoman" },
  ];

  return (
    <div className={styles.strip}>
      <div className={styles.scrollRow}>
        {PIECES.map((piece, index) => (
          <button
            key={index}
            onClick={() => onPieceClick(piece)}
            className={styles.pieceButton}
          >
            {piece.name}
          </button>
        ))}
      </div>
    </div>
  );
}