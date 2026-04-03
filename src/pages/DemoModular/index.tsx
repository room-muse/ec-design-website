import React from "react";
import TopBar from "./components/TopBar";
import Canvas from "./components/Canvas";
import ColorPicker from "./components/ColorPicker";
import PieceStrip from "./components/PieceStrip";

export default function DemoModular() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <TopBar />
      <div style={{ flex: 1 }}>
        <Canvas />
      </div>
      <ColorPicker />
      <PieceStrip />
    </div>
  );
}