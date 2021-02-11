import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Board } from './Board'

 const Game: React.FC = () => {
   const dispatch = useDispatch();
    const winner = useSelector<GameState, GameState["winner"]>(state => state.winner)
    return (
      <div className="Game">
        <button onClick={() => dispatch({type:"RESET_BOARD"})}>Reset Board</button>
        <Board />
        {winner && <div>The Winner is {winner}</div>}
      </div>
    );
}

export default Game;