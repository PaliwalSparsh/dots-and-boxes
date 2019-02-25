import React from 'react';
import PropTypes from 'prop-types';
import GridBlock from './GridBlock';
import './styles/Grid.style.css';

function renderGrid(state, dispatch) {
	const { grid } = state;
	return grid.map(row => {
		return (
			<div className="grid__row">
				{row.map(block => <GridBlock block={block} dispatch={dispatch} />)}
			</div>
		);
	});
}

function Grid(props) {
	const { state, dispatch } = props;
	const { rows } = state;
	const width = rows * 80 + (rows + 1) * 10;
	return (
		<div className="grid" style={{ width: width }}>
			{renderGrid(state, dispatch)}
		</div>
	);
}

Grid.propTypes = {
	state: PropTypes.object.isRequired,
	dispatch: PropTypes.func.isRequired,
};

Grid.defaultProps = {
	state: {
		currentPlayer: 0,
		grid: [],
	},
	dispatch: () => {},
};

export default Grid;
