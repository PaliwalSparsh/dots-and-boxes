import React from 'react';
import PropTypes from 'prop-types';
import Constants from '../constants';
import './styles/Box.style.css';

const { DEFAULT_BOX_COLOR, PRIMARY_BOX_COLOR, SECONDARY_BOX_COLOR } = Constants.colors;

function Box(props) {
	const { type, text } = props;
	const styles = {};
	switch (type) {
		case 0:
			styles.backgroundColor = DEFAULT_BOX_COLOR;
			break;
		case 1:
			styles.backgroundColor = PRIMARY_BOX_COLOR;
			break;
		case 2:
			styles.backgroundColor = SECONDARY_BOX_COLOR;
			break;
		default:
			styles.display = 'none';
	}
	return (
		<div className="box" style={styles}>
			{text}
		</div>
	);
}

Box.propTypes = {
	color: PropTypes.string,
	type: PropTypes.any,
};

Box.defaultProps = {
	color: 'tomato',
	type: 0,
};

export default Box;
