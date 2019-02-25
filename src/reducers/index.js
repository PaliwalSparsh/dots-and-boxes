import { generateGrid } from '../utils';

function deepCopyArrayWhileUpdatingRowValues(array, row, column, valueToBeUpdatedAtRow) {
	return Object.assign([...array], {
		[column]: Object.assign([...array[column]], {
			[row]: valueToBeUpdatedAtRow,
		}),
	});
}

function togglePlayer(state, action) {
	const updatedCurrentPlayer = state.currentPlayer === 1 ? 2 : 1;
	return updatedCurrentPlayer;
}

function getUpdatedScores(scores, currentTurnScore, currentPlayer) {
	const updatedScores = [...scores];
	updatedScores[currentPlayer - 1] = updatedScores[currentPlayer - 1] + currentTurnScore;
	return updatedScores;
}

function isGameCompleted(rows, columns, updatedScores) {
	return rows * columns <= updatedScores[0] + updatedScores[1];
}

function getUpdatedState(state, action, type) {
	const { currentPlayer, grid, scores } = state;
	const { row, column } = action.payload;
	const isTopBarUpdated = type === 'top';
	const currentBlockState = grid[column][row];
	let currentTurnScore = 0;

	//---------------------------------------------------------------------------//

	const hasAlreadyBeenChangedBefore = isTopBarUpdated
		? currentBlockState.top !== 0
		: currentBlockState.left !== 0;
	if (hasAlreadyBeenChangedBefore) {
		return state;
	}

	//---------------------------------------------------------------------------//

	const updatedBlockState = Object.assign(
		currentBlockState,
		isTopBarUpdated ? { top: currentPlayer } : { left: currentPlayer }
	);
	let updatedGrid = deepCopyArrayWhileUpdatingRowValues(state.grid, row, column, updatedBlockState);

	//---------------------------------------------------------------------------//

	let shouldTogglePlayer = true;

	//---------------------------------------------------------------------------//

	const currentBlock = updatedBlockState;
	let isNotPresentOnEdge = false;
	if (isTopBarUpdated) {
		const totalColumns = state.columns;
		isNotPresentOnEdge = column < totalColumns;
	} else {
		const totalRows = state.rows;
		isNotPresentOnEdge = row < totalRows;
	}
	if (isNotPresentOnEdge) {
		const bottomBlock = grid[column + 1][row];
		const rightBlock = grid[column][row + 1];

		const isCurrentBlockUpdated =
			updatedBlockState.left !== 0 &&
			updatedBlockState.top !== 0 &&
			bottomBlock.top !== 0 &&
			rightBlock.left !== 0;

		if (isCurrentBlockUpdated) {
			shouldTogglePlayer = false;
			currentTurnScore += 1;
			updatedGrid = deepCopyArrayWhileUpdatingRowValues(
				state.grid,
				row,
				column,
				Object.assign(updatedBlockState, { completedBy: currentPlayer })
			);
		}
	}

	//---------------------------------------------------------------------------//

	if (isTopBarUpdated) {
		if (column > 0) {
			const topBlock = grid[column - 1][row];
			const topRightBlock = grid[column - 1][row + 1];

			const isTopBlockUpdated =
				topBlock.left !== 0 &&
				topBlock.top !== 0 &&
				currentBlock.top !== 0 &&
				topRightBlock.left !== 0;

			if (isTopBlockUpdated) {
				shouldTogglePlayer = false;
				currentTurnScore += 1;
				updatedGrid = deepCopyArrayWhileUpdatingRowValues(
					state.grid,
					row,
					column - 1,
					Object.assign(topBlock, { completedBy: currentPlayer })
				);
			}
		}
	} else {
		if (row > 0) {
			const leftBlock = grid[column][row - 1];
			const bottomLeftBlock = grid[column + 1][row - 1];

			const isLeftBlockUpdated =
				leftBlock.left !== 0 &&
				leftBlock.top !== 0 &&
				bottomLeftBlock.top !== 0 &&
				currentBlock.left !== 0;

			if (isLeftBlockUpdated) {
				currentTurnScore += 1;
				shouldTogglePlayer = false;
				updatedGrid = deepCopyArrayWhileUpdatingRowValues(
					state.grid,
					row - 1,
					column,
					Object.assign(leftBlock, { completedBy: currentPlayer })
				);
			}
		}
	}

	const updatedScores = getUpdatedScores(scores, currentTurnScore, currentPlayer);
	const isGameComplete = isGameCompleted(state.rows, state.columns, updatedScores);

	//---------------------------------------------------------------------------//

	return Object.assign(
		{},
		state,
		{ grid: updatedGrid },
		{ currentPlayer: shouldTogglePlayer ? togglePlayer(state) : currentPlayer },
		{ scores: updatedScores },
		isGameComplete ? { gameState: 2 } : {}
	);
}

export const initialState = {
	gameState: 0, // 0 is StartMenu, 1 is GameScreen, 2 is GameOver
	rows: 5,
	columns: 5,
	currentPlayer: 1, // values 1 and 2
	scores: [0, 0], // for player 1 and player 2
	grid: [],
};

export function reducer(state, action) {
	console.log(state);
	switch (action.type) {
		case 'START_GAME':
			return Object.assign({}, state, action.payload, { gameState: 1 });
		case 'RESTART_GAME':
			return { ...initialState };
		case 'GENERATE_GRID':
			return Object.assign({}, state, {
				grid: generateGrid(state.rows, state.columns),
			});
		case 'UPDATE_GRID_TOP':
			console.log(state);
			return getUpdatedState(state, action, 'top');
		case 'UPDATE_GRID_LEFT':
			console.log(state);
			return getUpdatedState(state, action, 'left');
		default:
			return null;
	}
}
