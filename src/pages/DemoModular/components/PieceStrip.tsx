import React from "react";
import { Piece } from "../../../types/piece";

export default function PieceStrip() {
  const PIECES: Piece[] = [
    { name: "Left Arm" },
    { name: "Middle" },
    { name: "Corner" },
    { name: "Right Arm" },
    { name: "Ottoman" },
  ];

  return (
    <div className="h-24 border-t bg-white">
      <div className="flex gap-3 overflow-x-auto px-4 py-3">
        {PIECES.map((piece, index) => (
          <button
            key={index}
            onClick={() => console.log(piece)}
            className="min-w-[90px] flex-shrink-0 bg-gray-100 rounded-lg px-3 py-2 text-sm text-center"
          >
            {piece.name}
          </button>
        ))}
      </div>
    </div>
  );
}