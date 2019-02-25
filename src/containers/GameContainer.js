import React, {useReducer} from 'react';
import PropTypes from 'prop-types';
import Grid from '../components/Grid';
import './styles/GameContainer.style.css';


const initialState = {
  highScore: 0,
  currentScore: 0,
  progress: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_HIGH_SCORE':
      return Object.assign({}, state, action.payload);
    case 'UPDATE_CURRENT_SCORE':
      return Object.assign({}, state, action.payload);
    case 'UPDATE_PROGRESS':
      return Object.assign({}, state, action.payload);
    case 'UPDATE_ALL_VALUES':
      return Object.assign({}, state, action.payload);
    default:
      return null;
  }
}

function GameContainer(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
	const { rows, columns } = props;
	return (
		<div className="game-container">
			<Grid rows={rows} columns={columns} />
		</div>
	);
}

GameContainer.propTypes = {
	rows: PropTypes.number.isRequired,
	column: PropTypes.number.isRequired,
};

GameContainer.defaultProps = {
	rows: 3,
	columns: 3,
};

export default GameContainer;
