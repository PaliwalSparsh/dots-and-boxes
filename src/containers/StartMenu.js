import React, { useState } from 'react';
import { startGame } from '../actions';
import './styles/StartMenu.style.css';

function MainScreen(props) {
	const { dispatch } = props;
	const [rows, setRows] = useState(3);
	const [columns, setColumns] = useState(3);
	const isSmallScreen = window.innerWidth < 480;
	function handleStartGame() {
		dispatch(startGame(parseInt(rows), parseInt(columns)));
	}

	return (
		<div className="start-menu">
			<div className="start-menu__game-name">
				<div>dots-and-boxes</div>
			</div>
			<div className="start-menu__input">
				<label>Rows</label>
				<input type="input" value={rows} onChange={e => setRows(e.target.value)} />
			</div>
			<div className="start-menu__input">
				<label>Columns</label>
				<input type="input" value={columns} onChange={e => setColumns(e.target.value)} />
			</div>
			<div className="start-menu__button">
				<button onTouchStart={handleStartGame} onClick={handleStartGame}>
					START GAME
				</button>
			</div>
			{isSmallScreen && (
				<div className="start-menu__note">Play game with 3X3 grid for better experience.</div>
			)}
		</div>
	);
}

export default MainScreen;
