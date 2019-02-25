import React from 'react';
import PropTypes from "prop-types";
import './styles/Box.style.css';

function Box(props) {
	const { type, text } = props;
	const styles = {};
	switch (type) {
		case 0:
			styles.backgroundColor = '#ffffff';
			break;
		case 1:
			styles.backgroundColor = '#6f0765';
			break;
		case 2:
			styles.backgroundColor = '#ffb228';
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
	type: PropTypes.any.isRequired
};

// Same approach for defaultProps too
Box.defaultProps = {
  color: "tomato",
	type: 0
};

export default Box;
