import { generateGrid, gridBlockObject } from '../utils';

it('should generate grid', () => {
	const expectedOutput = [
		[
			{ row: 0, column: 0, left: 0, top: 0, completedBy: 0 },
			{
				row: 1,
				column: 0,
				left: 0,
				top: null,
				completedBy: null,
			},
		],
		[
			{
				row: 0,
				column: 1,
				left: null,
				top: 0,
				completedBy: null,
			},
		],
	];
	expect(generateGrid(1, 1)).toEqual(expectedOutput);
});

it('should generate grid object', () => {
	const expectedOutput = { row: 0, column: 0, left: 1, top: 0, completedBy: 1 };
	expect(gridBlockObject(0, 0, 1, 0, 1)).toEqual(expectedOutput);
});

it('should generate grid object even for null values', () => {
	const expectedOutput = { row: 0, column: null, left: 1, top: null, completedBy: 1 };
	expect(gridBlockObject(0, null, 1, null, 1)).toEqual(expectedOutput);
});
