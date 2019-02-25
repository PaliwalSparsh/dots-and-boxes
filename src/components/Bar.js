import React from 'react';
import PropTypes from 'prop-types';
import './styles/Bar.style.css';

function Bar(props) {
	const { orientation, type } = props;
	const styles = {};
	switch (type) {
		case 0:
			styles.backgroundColor = '#d0d0d0';
			break;
		case 1:
			styles.backgroundColor = '#4c0045';
			break;
		case 2:
			styles.backgroundColor = '#bd512f';
			break;
		default:
			styles.display = 'none';
	}
	const isVerticalBar = orientation === 'vertical';
	const className = isVerticalBar ? 'vertical-bar' : 'horizontal-bar';
	return <div className={className} style={styles} onClick={props.onBarClick} />;
}

Bar.propTypes = {
	type: PropTypes.any,
	orientation: PropTypes.string,
};

Bar.defaultProps = {
	type: undefined,
	orientation: 'horizontal',
};

export default Bar;
