
const initialState = {
    board: []
}

export const boardReducer = (state: BoardState = initialState, action: Actions) => {
    switch(action.type){
        case "ADD_CELL":
            // const newBoard = [...state.board];
            // newBoard.forEach(cell => {

            // })
            return {...state, board: [...state.board, action.cell]}

        default:
            return state;
    }
}