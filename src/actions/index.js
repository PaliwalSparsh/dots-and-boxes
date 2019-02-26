import Constants from '../constants';

export const startGame = (rows, columns) => ({
	type: Constants.START_GAME,
	payload: { rows, columns, currentScreen: 1 },
});

export const updateGrid = (row, column, type) => ({
	type: Constants.UPDATE_GRID,
	payload: { row, column, type },
});

export const generateGrid = () => ({
	type: Constants.GENERATE_GRID,
});

export const restartGame = () => ({
	type: Constants.RESTART_GAME,
});
