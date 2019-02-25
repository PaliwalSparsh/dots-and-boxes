import React from 'react';
import { restartGame } from '../actions';
import './styles/StartMenu.style.css';

function GameOver(props) {
	const { state, dispatch } = props;
	const { scores } = state;
	const hasPlayerOneWon = scores[0] > scores[1];
	function navigateToMainMenu() {
		dispatch(restartGame());
	}

	return (
		<div className="game-over">
			<div>{hasPlayerOneWon ? 'PLAYER 1' : 'PLAYER 2'}</div>
			<div>WON</div>
			<button onClick={navigateToMainMenu}>GO TO MAIN MENU</button>
		</div>
	);
}

export default GameOver;
