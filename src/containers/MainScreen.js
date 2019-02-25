import React, { useEffect } from 'react';
import Score from '../components/Score';
import Grid from '../components/Grid';
import { generateGrid, restartGame } from '../actions';
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
		<div className="main-screen">
			<div className="main-screen__scores">
				<Score title="Player 1" value={state.scores[0]} />
				<Score title="Player 2" value={state.scores[1]} />
			</div>
			<div className="main-screen__grid">
				<Grid state={state} dispatch={dispatch} />
			</div>
			<div className="main-screen__note">
				<span>Scroll in case of bigger grids.</span>
				<span
					onClick={() => {
						dispatch(restartGame());
					}}
					className="main-screen__note__link"
				>
					Go to Main Menu.
				</span>
			</div>
		</div>
	);
}

export default MainScreen;
