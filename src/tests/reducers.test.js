import { initialState, reducers } from '../reducers';
import Constants from '../constants';
import { randomState_1x1, grid_1x1 } from './stubs';

const INITIAL_STATE = {
	currentScreen: 0,
	rows: 3,
	columns: 3,
	currentPlayer: 1,
	scores: [0, 0],
	grid: [],
};

const RANDOM_STATE = {
	currentScreen: 1,
	rows: 3,
	columns: 3,
	currentPlayer: 1,
	scores: [2, 2],
	grid: [],
};

it('should make sure initialState does not change', () => {
	const expected = INITIAL_STATE;
	expect(initialState).toEqual(expected);
});

it('should start game by responding to start game action', () => {
	const action = {
		type: Constants.START_GAME,
		payload: { rows: 2, columns: 2, currentScreen: 1 },
	};
	const expected = Object.assign({}, INITIAL_STATE, action.payload);
	expect(reducers(INITIAL_STATE, action)).toEqual(expected);
});

it('should restart game by responding to restart game action', () => {
	const action = {
		type: Constants.RESTART_GAME,
	};
	const expected = INITIAL_STATE;
	expect(reducers(RANDOM_STATE, action)).toEqual(expected);
});

it('should generate grid by responding to generate grid action', () => {
	const action = {
		type: Constants.GENERATE_GRID,
	};
	const expected = Object.assign({}, randomState_1x1, { grid: grid_1x1 });
	expect(reducers(randomState_1x1, action)).toEqual(expected);
});
