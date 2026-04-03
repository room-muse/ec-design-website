import React from "react";
import TopBar from "./components/TopBar";
import Canvas from "./components/Canvas";
import PieceStrip from "./components/PieceStrip";
import styles from "./DemoModular.module.css";
import { Piece } from "../../types/piece";

export default function DemoModular() {
  const [pieces, setPieces] = React.useState<Piece[]>([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleAddPiece = (piece: Piece) => {
    setPieces((prev) => [...prev, piece]);
  };

  return (
    <div className={styles.page}>
      <TopBar pieceCount={pieces.length} totalPrice={totalPrice} />
      <div className={styles.canvasArea}>
        <Canvas pieces={pieces} />
      </div>
      <PieceStrip onPieceClick={handleAddPiece} selectedPieces={pieces} />
    </div>
  );
}