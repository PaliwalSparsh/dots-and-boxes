export function logStates(state, action) {
	const isDevelopment = process.env.NODE_ENV === 'development';
	if (isDevelopment) {
		console.log('State: ', state);
		console.log('Action: ', action);
	}
}

export function gridBlockObject(row, column, left, top, completedBy) {
	return {
		row,
		column,
		left,
		top,
		completedBy,
	};
}

export function generateGrid(rows, columns) {
	let grid = [];
	let i, j, rowData;
	for (i = 0; i < columns; i++) {
		rowData = [];
		for (j = 0; j <= rows; j++) {
			const isLastRow = j === rows;
			rowData.push(gridBlockObject(j, i, 0, isLastRow ? null : 0, isLastRow ? null : 0));
		}
		grid.push(rowData);
	}
	// last row
	rowData = [];
	for (j = 0; j < rows; j++) {
		rowData.push(gridBlockObject(j, i, null, 0, null));
	}
	// last row and last column, just dot.
	rowData.push(gridBlockObject(j, i, null, null, null));
	grid.push(rowData);
	return grid;
}

export function deepCopyArrayWhileUpdatingRowValues(array, row, column, valueToBeUpdatedAtRow) {
	return Object.assign([...array], {
		[column]: Object.assign([...array[column]], {
			[row]: valueToBeUpdatedAtRow,
		}),
	});
}

export function togglePlayer(currentPlayer) {
	const updatedPlayer = currentPlayer === 1 ? 2 : 1;
	return updatedPlayer;
}

export function getUpdatedScoresWithCurrentTurnScore(scores, currentTurnScore, currentPlayer) {
	const updatedScores = [...scores];
	updatedScores[currentPlayer - 1] = updatedScores[currentPlayer - 1] + currentTurnScore;
	return updatedScores;
}

export function isGameCompleted(rows, columns, scores) {
	return rows * columns <= scores[0] + scores[1];
}

export function getUpdatedState(state, action) {
	const { currentPlayer, grid, scores } = state;
	const { row, column, type } = action.payload;
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

	const updatedScores = getUpdatedScoresWithCurrentTurnScore(
		scores,
		currentTurnScore,
		currentPlayer
	);

	const isGameComplete = isGameCompleted(state.rows, state.columns, updatedScores);

	//---------------------------------------------------------------------------//

	return Object.assign(
		{},
		state,
		{ grid: updatedGrid },
		{ currentPlayer: shouldTogglePlayer ? togglePlayer(currentPlayer) : currentPlayer },
		{ scores: updatedScores },
		isGameComplete ? { currentScreen: 2 } : {}
	);
}
