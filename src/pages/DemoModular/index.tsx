import React from "react";
import TopBar from "./components/TopBar";
import Canvas from "./components/Canvas";
import ColorPicker from "./components/ColorPicker";
import PieceStrip from "./components/PieceStrip";
import { Piece } from "../../types/piece";

export default function DemoModular() {
  const [pieces, setPieces] = React.useState<Piece[]>([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  return (
    <div className="flex h-screen flex-col ">
      <TopBar pieceCount={pieces.length} totalPrice={totalPrice} />
      <div className="flex flex-1 min-h-0">
        <Canvas />
      </div>
      <PieceStrip />
    </div>
  );
}