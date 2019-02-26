import React from 'react';
import PropTypes from 'prop-types';
import './styles/Score.style.css';

function Score(props) {
	const { color, title, value } = props;
	return (
		<div className="score-container">
			<div className="title" style={{ color: color }}>
				{title}
			</div>
			<div className="value">{value}</div>
		</div>
	);
}

Score.propTypes = {
	color: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired
}

Score.defaultProps = {
	color: '#ffffff',
	title: '<title>',
	value: 0
}

export default Score;
