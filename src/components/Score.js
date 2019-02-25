import React from "react";
import "./styles/Score.style.css";

function Score(props) {
  return (
    <div className="score-container">
      <div className="title">{props.title}</div>
      <div className="value">{props.value}</div>
    </div>
  );
}

export default Score;
