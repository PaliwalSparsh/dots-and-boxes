import React, { useReducer } from 'react';
import StartMenu from './StartMenu';
import MainScreen from './MainScreen';
import GameOver from './GameOver';
import { initialState, reducer } from '../reducers';
import './styles/GameContainer.style.css';

function GameContainer(props) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { currentScreen } = state;
	const showStartMenuScreen = currentScreen === 0;
	const showMainGameScreen = currentScreen === 1;
	const showGameOverScreen = currentScreen === 2;
	return (
		<div className="game-container">
			{showStartMenuScreen && <StartMenu dispatch={dispatch} />}
			{showMainGameScreen && <MainScreen state={state} dispatch={dispatch} />}
			{showGameOverScreen && <GameOver state={state} dispatch={dispatch} />}
		</div>
	);
}

export default GameContainer;
