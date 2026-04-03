import React from "react";
import { Piece } from "../../../types/piece";
import styles from "./PieceStrip.module.css";

interface PieceStripProps {
  onPieceClick: (piece: Piece) => void;
  selectedPieces: Piece[];
}

export default function PieceStrip({
  onPieceClick,
  selectedPieces,
}: PieceStripProps) {
  const [isLoading, setIsLoading] = React.useState(false);

  const PIECES: Piece[] = [
    { id: 1, name: "Left Arm" },
    { id: 2, name: "Middle" },
    { id: 3, name: "Right Arm" },
  ];

  const handleViewAR = async () => {
    if (selectedPieces.length === 0 || isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        pieces: selectedPieces.map((piece) => ({
          pieceId: piece.id,
        })),
      };

      const response = await fetch(
        "https://ar-backend-563656133641.us-central1.run.app/assemble-modular",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const data = await response.json();
      console.log("AR payload response:", data);
    } catch (error) {
      console.error("Failed to send AR payload:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.strip}>
      <div className={styles.piecesArea}>
        <div className={styles.scrollRow}>
          {PIECES.map((piece) => (
            <button
              key={piece.id}
              onClick={() => onPieceClick(piece)}
              className={styles.pieceButton}
            >
              {piece.name}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.actionArea}>
        <button
          className={styles.arButton}
          onClick={handleViewAR}
          disabled={isLoading || selectedPieces.length === 0}
        >
          {isLoading ? (
            <>
              <span className={styles.spinner} />
              <span>Preparing...</span>
            </>
          ) : (
            "View in AR"
          )}
        </button>
      </div>
    </div>
  );
}