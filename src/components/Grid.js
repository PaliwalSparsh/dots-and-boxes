import React from 'react';
import PropTypes from 'prop-types';
import Dot from '../components/Dot';
import Box from '../components/Box';
import Bar from '../components/Bar';
import './styles/Grid.style.css';

function GridBasicBlock(props) {
	return (
		<div className="grid__basic-block">
			<div className="grid__basic-block__dot-and-bar">
				<Dot />
				<Bar type="horizontal" />
			</div>
			<div className="grid__basic-block__bar-and-box">
				<Bar type="vertical" />
				<Box text={props.text} />
			</div>
		</div>
	);
}

function GridLastRowBlock() {
	return (
		<div className="grid__last-row-block">
			<Dot />
			<Bar type="vertical" />
		</div>
	);
}

function GridLastColumnBlock() {
	return (
		<div className="grid__last-column-block">
			<Dot />
			<Bar type="horizontal" />
		</div>
	);
}

function renderGrid(rows, columns) {
	let grid = [];
	let i, j, row;
	for (i = 0; i < columns; i++) {
		row = [];
		for (j = 0; j < rows; j++) {
			row.push(<GridBasicBlock text={JSON.stringify([j, i])} />);
		}
		row.push(<GridLastRowBlock />);
		grid.push(<div className="grid__row">{row}</div>);
	}
	// last column
	row = [];
	for (j = 0; j < rows; j++) {
		row.push(<GridLastColumnBlock/>);
	}
	row.push(<Dot/>)
	grid.push(<div className="grid__row">{row}</div>);

	return grid;
}

function Grid(props) {
	const { rows, columns, onBarClick } = props;
	return <div className="grid">{renderGrid(rows, columns)}</div>;
}

export default Grid;
