import {
	generateGrid,
	gridBlockObject,
	deepCopyArrayWhileUpdatingRowValues,
	togglePlayer,
	getUpdatedScoresWithCurrentTurnScore,
	isGameCompleted
} from '../utils';
import { grid_1x1 } from './stubs';

it('should generate grid', () => {
	const expectedOutput = grid_1x1;
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

it('should generate deep copy of array while updating full object at defined position', () => {
	const inputArray = [
		[{ a: 1, b: 2 }, { a: 1, b: 2 }, { a: 1, b: 2 }],
		[{ a: 1, b: 2 }, { a: 1, b: 2 }, { a: 1, b: 2 }],
		[{ a: 1, b: 2 }, { a: 1, b: 2 }, { a: 1, b: 2 }],
	];
	const firstExpectedOutput = [
		[{ c: 4, d: 3 }, { a: 1, b: 2 }, { a: 1, b: 2 }],
		[{ a: 1, b: 2 }, { a: 1, b: 2 }, { a: 1, b: 2 }],
		[{ a: 1, b: 2 }, { a: 1, b: 2 }, { a: 1, b: 2 }],
	];
	const secondExpectedOutput = [
		[{ a: 1, b: 2 }, { a: 1, b: 2 }, { a: 1, b: 2 }],
		[{ a: 1, b: 2 }, { a: 1, b: 2 }, { a: 1, b: 2 }],
		[{ a: 1, b: 2 }, { a: 1, b: 2 }, { c: 4, d: 3 }],
	];
	expect(deepCopyArrayWhileUpdatingRowValues(inputArray, 0, 0, { c: 4, d: 3 })).toEqual(
		firstExpectedOutput
	);
	expect(deepCopyArrayWhileUpdatingRowValues(inputArray, 2, 2, { c: 4, d: 3 })).toEqual(
		secondExpectedOutput
	);
});

it('should return toggled player from 1 to 2', () => {
	expect(togglePlayer(1)).toBe(2);
});

it('should return toggled player from 2 to 1', () => {
	expect(togglePlayer(2)).toBe(1);
});

it('should return updateScores by increasing score of player 1', ()=>{
	expect(getUpdatedScoresWithCurrentTurnScore([0,0], 2, 1)).toEqual([2,0]);
})

it('should return updateScores by increasing score of player 2', ()=>{
	expect(getUpdatedScoresWithCurrentTurnScore([0,1], 2, 2)).toEqual([0,3]);
})

it('should check if the game is completed', ()=>{
	expect(isGameCompleted(2,2,[1,3])).toBe(true);
})

it('should check if the game is not completed', ()=>{
	expect(isGameCompleted(2,2,[1,2])).toBe(false);
})
