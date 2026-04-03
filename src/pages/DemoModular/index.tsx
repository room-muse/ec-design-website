import React from "react";
import TopBar from "./components/TopBar";
import Canvas from "./components/Canvas";
import ColorPicker from "./components/ColorPicker";
import PieceStrip from "./components/PieceStrip";

export default function DemoModular() {
  const [pieces, setPieces] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  return (
    <div className="flex flex-col h-screen">
      <TopBar pieceCount={pieces.length} totalPrice={totalPrice} />
      <div className="flex-1 min-h-0">
        <Canvas />
      </div>
      <ColorPicker />
      <PieceStrip />
    </div>
  );
}