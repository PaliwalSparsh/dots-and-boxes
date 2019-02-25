import { generateGrid, gridBoxObject } from '../utils';

it('should generate grid', () => {
	const expectedOutput = [
		[
			{ row: 0, column: 0, left: 0, top: 0, completedBy: 0 },
			{
				row: 1,
				column: 0,
				left: 0,
				top: undefined,
				completedBy: undefined,
			},
		],
		[
			{
				row: 0,
				column: 1,
				left: undefined,
				top: 0,
				completedBy: undefined,
			},
		],
	];

	expect(generateGrid(1, 1)).toEqual(expectedOutput);
});

it('should generate grid object', () => {
	const expectedOutput = { row: 0, column: 0, left: 1, top: 0, completedBy: 1 };

	expect(gridBoxObject(0, 0, 1, 0, 1)).toEqual(expectedOutput);
});
