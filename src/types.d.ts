interface Cell {
    value: string
}

interface CellProps {
    cell: Cell
}


type BoardState = {
    board: Cell[]
}

type CalculateWinner = (board: cell[]) => string

type Actions = {type: "ADD_CELL", cell: Cell}  
