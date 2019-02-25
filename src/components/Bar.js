import React from "react";
import PropTypes from "prop-types";
import "./styles/Bar.style.css";

function Bar(props) {
  const {color, type} = props
  const styles = {
    backgroundColor: color
  }
  const isVerticalBar = type === 'vertical';
  const className = isVerticalBar ? 'vertical-bar' : 'horizontal-bar'
  return (
    <div className={className} style={styles}></div>
  );
}

Bar.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string
};

Bar.defaultProps = {
  color: "grey",
  type: "horizontal"
};

export default Bar;
