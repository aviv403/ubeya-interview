const initialState = {
    board: Array(9).fill({}).map((_,i) => {
        return {value: "", idx: i};
    }),
    isXTurn: true,
    winner: null
}

export const gameReducer = (state: GameState = JSON.parse(JSON.stringify(initialState)), action: Actions) => {
    switch(action.type){
        case "ADD_TO_BOARD":
            const newBoard = [...state.board];
            newBoard.forEach((cell,idx) => {
                if(idx === action.cell.idx){
                    cell.value = action.cell.value
                }
            })            
            return {...state, board: newBoard}
        case "TURN_TOGGLE":
            return {...state, isXTurn: !state.isXTurn}
        case "RESET_BOARD":
            return JSON.parse(JSON.stringify(initialState));
        case "DECLARE_WINNER":
            return {...state, winner: action.winner}
        default:
            return state;
    }
    

}