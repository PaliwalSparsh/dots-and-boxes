export const randomState_1x1 = {
	currentScreen: 1,
	rows: 1,
	columns: 1,
	currentPlayer: 1,
	scores: [0, 0],
	grid: [],
};

export const grid_1x1 = [
	[
		{ column: 0, completedBy: 0, left: 0, row: 0, top: 0 },
		{ column: 0, completedBy: null, left: 0, row: 1, top: null },
	],
	[
		{ column: 1, completedBy: null, left: null, row: 0, top: 0 },
		{ column: 1, completedBy: null, left: null, row: 1, top: null },
	],
];

export const randomState_2x2 = {
	currentScreen: 1,
	rows: 2,
	columns: 2,
	currentPlayer: 1,
	scores: [0, 0],
	grid: [],
};

export const state_2x2 = {
	currentScreen: 1,
	rows: 2,
	columns: 2,
	currentPlayer: 1,
	scores: [0, 0],
	grid: [
		[
			{
				row: 0,
				column: 0,
				left: 0,
				top: 1,
				completedBy: 0,
			},
			{
				row: 1,
				column: 0,
				left: 0,
				top: 0,
				completedBy: 0,
			},
			{
				row: 2,
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
				left: 0,
				top: 0,
				completedBy: 0,
			},
			{
				row: 1,
				column: 1,
				left: 0,
				top: 0,
				completedBy: 0,
			},
			{
				row: 2,
				column: 1,
				left: 0,
				top: null,
				completedBy: null,
			},
		],
		[
			{
				row: 0,
				column: 2,
				left: null,
				top: 0,
				completedBy: null,
			},
			{
				row: 1,
				column: 2,
				left: null,
				top: 0,
				completedBy: null,
			},
			{
				row: 2,
				column: 2,
				left: null,
				top: null,
				completedBy: null,
			},
		],
	],
};

export const updatedState_2x2 = {
	currentScreen: 1,
	rows: 2,
	columns: 2,
	currentPlayer: 2,
	scores: [0, 0],
	grid: [
		[
			{
				row: 0,
				column: 0,
				left: 0,
				top: 1,
				completedBy: 0,
			},
			{
				row: 1,
				column: 0,
				left: 0,
				top: 0,
				completedBy: 0,
			},
			{
				row: 2,
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
				left: 0,
				top: 0,
				completedBy: 0,
			},
			{
				row: 1,
				column: 1,
				left: 0,
				top: 0,
				completedBy: 0,
			},
			{
				row: 2,
				column: 1,
				left: 0,
				top: null,
				completedBy: null,
			},
		],
		[
			{
				row: 0,
				column: 2,
				left: null,
				top: 0,
				completedBy: null,
			},
			{
				row: 1,
				column: 2,
				left: null,
				top: 0,
				completedBy: null,
			},
			{
				row: 2,
				column: 2,
				left: null,
				top: null,
				completedBy: null,
			},
		],
	],
};
