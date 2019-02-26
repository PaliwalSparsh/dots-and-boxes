import React from 'react';
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

export default Score;
