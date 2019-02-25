import React from 'react';
import PropTypes from 'prop-types';
import Dot from '../components/Dot';
import Box from '../components/Box';
import Bar from '../components/Bar';
import './styles/GridBlock.style.css';

function GridBlock(props) {
	const { block, dispatch } = props;

	function handleBarClick(payload, type) {
		if (type === 'top') {
			return dispatch({
				type: 'UPDATE_GRID_TOP',
				payload: payload,
			});
		}
		dispatch({
			type: 'UPDATE_GRID_LEFT',
			payload: payload,
		});
	}

	const { row, column, top, left, completedBy } = block;
	return (
		<div className="grid__basic-block">
			<div className="grid__basic-block__dot-and-bar">
				<Dot />
				<Bar
					type={top}
					orientation="horizontal"
					onBarClick={() => handleBarClick({ row, column }, 'top')}
				/>
			</div>
			<div className="grid__basic-block__bar-and-box">
				<Bar
					type={left}
					orientation="vertical"
					onBarClick={() => handleBarClick({ row, column }, 'left')}
				/>
				<Box type={completedBy} text={props.text} />
			</div>
		</div>
	);
}

export default GridBlock;
