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
	rowData = [];
	for (j = 0; j < rows; j++) {
		rowData.push(gridBlockObject(j, i, null, 0, null));
	}
	grid.push(rowData);
	return grid;
}
