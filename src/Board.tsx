import React from "react";
import { useSelector } from "react-redux";
import { Cell } from "./Cell";

export const Board: React.FC = () => {
  const board = useSelector<GameState, GameState["board"]>(
    (state) => state.board
  );
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,90px)",
        gridTemplateRows: "repeat(3,90px)",
      }}
    >
      {board.map((cell, idx) => (
        <Cell key={idx} cell={cell} />
      ))}
    </div>
  );
};
