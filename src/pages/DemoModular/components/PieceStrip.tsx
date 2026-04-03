import React from "react";
import { Piece } from "../../../types/piece";
import styles from "./PieceStrip.module.css";

interface PieceStripProps {
  onPieceClick: (piece: Piece) => void;
}

export default function PieceStrip({ onPieceClick }: PieceStripProps) {
  const PIECES: Piece[] = [
    { id: 1, name: "Left Arm" },
    { id: 2, name: "Middle" },
    { id: 3, name: "Right Arm" },
  ];

  const handleViewAR = async () => {
    try {
      const response = await fetch("http://localhost:8000/assemble-modular", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pieces: [
            { pieceId: 1 },
            { pieceId: 2 },
            { pieceId: 3 },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const data = await response.json();
      console.log("AR payload response:", data);
    } catch (error) {
      console.error("Failed to send AR payload:", error);
    }
  };

  return (
    <div className={styles.strip}>
      <div className={styles.piecesArea}>
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

      <div className={styles.actionArea}>
        <button className={styles.arButton} onClick={handleViewAR}>
          View in AR
        </button>
      </div>
    </div>
  );
}