import React from 'react';
import PropTypes from "prop-types";
import './styles/Box.style.css';

function Box(props) {
	const { color, text } = props;
	const styles = {
		backgroundColor: color,
	};
	return (
		<div className="box" style={styles}>
			{text}
		</div>
	);
}

Box.propTypes = {
  color: PropTypes.string,
	text: PropTypes.string.isRequired
};

// Same approach for defaultProps too
Box.defaultProps = {
  color: "tomato"
};

export default Box;
