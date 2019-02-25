import { List } from 'immutable';

export const initialState = {
	rows: 3,
	columns: 3,
	players: List([
		{
			name: 'one',
			color: 'tomato',
			score: 0,
		},
		{
			name: 'two',
			color: 'teal',
			score: 0,
		},
	]),
	grid: [],
};

export function reducer(state, action) {
	console.log(state);
	switch (action.type) {
		case 'UPDATE_ROWS_AND_COLUMNS':
			return Object.assign({}, state, action.payload);
		case 'START_GAME':
			return Object.assign({}, state, {
				grid: generateGrid(state.rows, state.columns),
			});
		case 'UPDATE_GRID_DATA':
			return Object.assign({}, state, action.payload);
		default:
			return null;
	}
}

function gridBoxObject(row, column, left, top, completedBy) {
	return {
		row,
		column,
		left,
		top,
		completedBy,
	};
}

function generateGrid(rows, columns) {
	let grid = [];
	let i, j, rowData;
	for (i = 0; i < columns; i++) {
		rowData = [];
		for (j = 0; j <= rows; j++) {
			const isLastRow = j === rows;
			rowData.push(gridBoxObject(j, i, 0, isLastRow ? undefined : 0, isLastRow ? undefined : 0));
		}
		grid.push(rowData);
	}
	rowData = [];
	for (j = 0; j < rows; j++) {
		rowData.push(gridBoxObject(j, i, undefined, 0, undefined));
	}
	grid.push(rowData);
	return grid;
}

export const __test__ = {
	gridBoxObject,
	generateGrid,
};
