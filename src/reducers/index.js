import { generateGrid, getUpdatedState } from '../utils';
import Constants from '../constants';

//Screens => 0: MenuScreen, 1: GameScreen, 2: GameOver
//Players => 1: Player1, 2: Player2

export const initialState = {
	currentScreen: 0,
	rows: 3,
	columns: 3,
	currentPlayer: 1,
	scores: [0, 0],
	grid: [],
};

export function reducer(state, action) {
	switch (action.type) {
		case Constants.START_GAME:
			return Object.assign({}, state, action.payload, { currentScreen: 1 });
		case Constants.GENERATE_GRID:
			return Object.assign({}, state, {
				grid: generateGrid(state.rows, state.columns),
			});
		case Constants.UPDATE_GRID:
			return getUpdatedState(state, action);
		case Constants.RESTART_GAME:
			return { ...initialState };
		default:
			return null;
	}
}
