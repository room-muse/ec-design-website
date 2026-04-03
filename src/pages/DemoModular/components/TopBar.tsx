import React from "react";

interface TopBarProps {
  pieceCount: number;
  totalPrice: number;
}

export default function TopBar({ pieceCount, totalPrice }: TopBarProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
      <span className="font-medium text-gray-900">ModularONE</span>
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-400">{pieceCount} pieces</span>
        <span className="font-medium text-gray-900">${totalPrice.toLocaleString()}</span>
      </div>
    </div>
  );
}