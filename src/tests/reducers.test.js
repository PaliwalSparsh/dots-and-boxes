import { initialState, reducers } from '../reducers';

it('should make sure initialState does not change', ()=>{
  const expected = {
  	currentScreen: 0,
  	rows: 3,
  	columns: 3,
  	currentPlayer: 1,
  	scores: [0, 0],
  	grid: [],
  };
  expect(initialState).toEqual(expected);
})
