import React, { useEffect } from 'react';
import Score from '../components/Score';
import Grid from '../components/Grid';
import { generateGrid } from '../actions';
import './styles/MainScreen.style.css';

function MainScreen(props) {
	const { state, dispatch } = props;
	const { rows, columns } = state;
	useEffect(
		() => {
			dispatch(generateGrid());
		},
		[rows, columns]
	);
	return (
		<div className="game-container">
			<Score title="Player 1" value={state.scores[0]} />
			<Score title="Player 2" value={state.scores[1]} />
			<Grid state={state} dispatch={dispatch} />
		</div>
	);
}

export default MainScreen;
