import React, { useState } from 'react';
import { startGame } from '../actions';
import './styles/StartMenu.style.css';

function MainScreen(props) {
	const { dispatch } = props;
	const [rows, setRows] = useState(3);
	const [columns, setColumns] = useState(3);

	function handleStartGame() {
		dispatch(startGame(parseInt(rows), parseInt(columns)));
	}

	return (
		<div className="start-menu">
			<label>
				Rows:
				<input type="input" name="rows" value={rows} onChange={e => setRows(e.target.value)} />
			</label>
			<label>
				Columns:
				<input
					type="input"
					name="columns"
					value={columns}
					onChange={e => setColumns(e.target.value)}
				/>
			</label>
			<button onClick={handleStartGame}>START GAME</button>
		</div>
	);
}

export default MainScreen;
