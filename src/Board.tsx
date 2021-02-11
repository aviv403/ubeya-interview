import React from "react";
import { useSelector } from "react-redux";
import {CellBoard} from "./CellBoard"
export const Board: React.FC = () => {
    const board = useSelector<BoardState,BoardState["board"]>(state => state.board)
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 90px)",
        gridTemplateRows: "repeat(3, 90px)",
      }}
     
    >
         {board.map(cell => {
             return <CellBoard cell={cell}/>
         })}
    </div>
  );
};
