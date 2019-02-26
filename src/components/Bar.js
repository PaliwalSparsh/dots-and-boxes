import React from 'react';
import PropTypes from 'prop-types';
import Constants from '../constants';
import './styles/Bar.style.css';

const { DEFAULT_BAR_COLOR, PRIMARY_BAR_COLOR, SECONDARY_BAR_COLOR } = Constants.colors;

function Bar(props) {
	const { orientation, type } = props;
	const styles = {};
	switch (type) {
		case 0:
			styles.backgroundColor = DEFAULT_BAR_COLOR;
			break;
		case 1:
			styles.backgroundColor = PRIMARY_BAR_COLOR;
			break;
		case 2:
			styles.backgroundColor = SECONDARY_BAR_COLOR;
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
