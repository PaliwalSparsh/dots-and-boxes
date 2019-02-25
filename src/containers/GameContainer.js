import React, { useReducer } from 'react';
import Grid from '../components/Grid';
import { initialState, reducer } from '../reducers';
import './styles/GameContainer.style.css';

function GameContainer(props) {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div className="game-container">
			<button
				onClick={() =>
					dispatch({
						type: 'START_GAME',
					})
				}
			>START GAME</button>
			<Grid data={state.grid} onBarClick={dispatch} />
		</div>
	);
}

export default GameContainer;
