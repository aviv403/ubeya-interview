interface Cell {
    value: string
    idx: number
}

interface GameState {
    board: Cell[];
    isXTurn: boolean;
    winner: null | string
}


type HandleClick = ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);

type CalculateWinner = (board: Cell[]) => string | null;

type Actions = 
{type: "ADD_TO_BOARD", cell: Cell} | 
{type: "TURN_TOGGLE", isXTurn: boolean} |
{type: "RESET_BOARD", initState: GameState} |
{type: "DECLARE_WINNER", winner: string | null}