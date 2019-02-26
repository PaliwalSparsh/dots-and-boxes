import React from 'react';
import PropTypes from 'prop-types';
import GridBlock from './GridBlock';
import './styles/Grid.style.css';

function renderGrid(state, dispatch) {
	const { grid } = state;
	return grid.map((row, rowIndex) => {
		return (
			<div key={`${rowIndex}`} className="grid__row">
				{row.map((block, blockIndex) => <GridBlock key={`${rowIndex}-${blockIndex}`} block={block} dispatch={dispatch} />)}
			</div>
		);
	});
}

function Grid(props) {
	const { state, dispatch } = props;
	const { rows } = state;
	const width = rows * 60 + (rows + 1) * 20;
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
