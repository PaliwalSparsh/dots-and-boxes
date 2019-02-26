import React from 'react';
import { restartGame } from '../actions';
import './styles/GameOver.style.css';

function GameOver(props) {
	const { state, dispatch } = props;
	const { scores } = state;
	const hasPlayerOneWon = scores[0] > scores[1];
	const isTie = scores[0] === scores[1];
	function navigateToMainMenu() {
		dispatch(restartGame());
	}

	// Marquee is added just for fun, eslint disabled for same.
	/* eslint-disable */
	return (
		<div className="game-over">
			<div className="game-over__game-completed">GAME COMPLETED</div>
			<div className="game-over__winner-name">
				<marquee scrollamount={15}>
					{isTie ? `IT'S A TIE` : hasPlayerOneWon ? 'PLAYER 1' : 'PLAYER 2'}
				</marquee>
			</div>
			<div className="game-over__won">WON</div>
			<div className="game-over__main-menu-button">
				<button onClick={navigateToMainMenu}>MAIN MENU</button>
			</div>
		</div>
	);
	/* eslint-disable */
}

export default GameOver;
