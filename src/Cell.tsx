import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface CellProps {
  cell: Cell;
}

export const Cell: React.FC<CellProps> = ({ cell }) => {
  const isXTurn = useSelector<GameState, boolean>((state) => state.isXTurn);
  const dispatch = useDispatch();
  const board = useSelector<GameState, GameState["board"]>(
    (state) => state.board
  );
  const winner = useSelector<GameState, GameState["winner"]>(
    (state) => state.winner
  );

  const calculateWinner: CalculateWinner = (board) => {
    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < combos.length; i++) {
      const [a, b, c] = combos[i];
      if (
        board[a].value &&
        board[a].value === board[b].value &&
        board[a].value === board[c].value
      ) {
        return board[a].value;
      }
    }
    return null;
  };

  const handleClick: HandleClick = (e) => {
    if (!winner) {
      if (!cell.value) {
        dispatch({
          type: "ADD_TO_BOARD",
          cell: { value: isXTurn ? "X" : "O", idx: cell.idx },
        });
        dispatch({ type: "TURN_TOGGLE" });

        const winner = calculateWinner(board);
        winner && dispatch({ type: "DECLARE_WINNER", winner });
      }
    }
  };
  return (
    <button
      onClick={handleClick}
      style={{
        width: "100%",
        height: "100%",
        fontSize: "40px",
        fontWeight: "bold",
      }}
    >
      {cell.value}
    </button>
  );
};
