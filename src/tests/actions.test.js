import { startGame, updateGrid, generateGrid, restartGame } from '../actions';
import Constants from '../constants';

it('should return action to start game', () => {
	const expected = {
		type: Constants.START_GAME,
		payload: { rows: 2, columns: 2, currentScreen: 1 },
	};
	expect(startGame(2, 2)).toEqual(expected);
});

it('should return action to update grid', () => {
	const expected = {
		type: Constants.UPDATE_GRID,
		payload: { row: 2, column: 2, type: 'top' },
	};
	expect(updateGrid(2, 2, 'top')).toEqual(expected);
});

it('should return action to generate grid', () => {
	const expected = {
		type: Constants.GENERATE_GRID,
	};
	expect(generateGrid()).toEqual(expected);
});

it('should return action to restart game', () => {
	const expected = {
		type: Constants.RESTART_GAME,
	};
	expect(restartGame()).toEqual(expected);
});
