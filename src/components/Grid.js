import React from 'react';
import PropTypes from 'prop-types';
import Dot from '../components/Dot';
import Box from '../components/Box';
import Bar from '../components/Bar';
import './styles/Grid.style.css';

const onBarClick() => {

}

function GridBasicBlock(props) {
	return (
		<div className="grid__basic-block">
			<div className="grid__basic-block__dot-and-bar">
				<Dot />
				<Bar type="horizontal" onBarClick={props.onBarClick} />
			</div>
			<div className="grid__basic-block__bar-and-box">
				<Bar type="vertical" onBarClick={props.onBarClick} />
				<Box text={props.text} />
			</div>
		</div>
	);
}

function GridLastRowBlock(props) {
	return (
		<div className="grid__last-row-block">
			<Dot />
			<Bar type="vertical" onBarClick={props.onBarClick} />
		</div>
	);
}

function GridLastColumnBlock(props) {
	return (
		<div className="grid__last-column-block">
			<Dot />
			<Bar type="horizontal" onBarClick={props.onBarClick} />
		</div>
	);
}

function renderGrid(rowsArray, onBarClick) {
	rowsArray.map((row)=>{
		row.map((block)=>{
			return <GridBasicBlock/>
		})
	})
	let grid = [];
	let i, j, row;
	for (i = 0; i < columns; i++) {
		row = [];
		for (j = 0; j < rows; j++) {
			row.push(<GridBasicBlock onBarClick={onBarClick} text={JSON.stringify([j, i])} />);
		}
		row.push(<GridLastRowBlock onBarClick={onBarClick} />);
		grid.push(<div className="grid__row">{row}</div>);
	}
	// last column
	row = [];
	for (j = 0; j < rows; j++) {
		row.push(<GridLastColumnBlock onBarClick={onBarClick} />);
	}
	row.push(<Dot />);
	grid.push(<div className="grid__row">{row}</div>);

	return grid;
}

function Grid(props) {
	const { data, onBarClick } = props;
	return <div className="grid">{renderGrid(data, onBarClick)}</div>;
}

Grid.propTypes = {
	data: PropTypes.array.isRequired,
	onBarClick: PropTypes.func.isRequired,
};

Grid.defaultProps = {
	data: [],
	onBarClick: ()=>{},
};

export default Grid;
