/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import propTypes from "prop-types";

function Scoreboard(props) {
  const { score, highScore } = props;
  return (
    <div className="scoreboard">
      <p className="current-score">Current score: {score}</p>
      <p className="current-score">Highest score: {highScore}</p>
    </div>
  );
}
Scoreboard.propTypes = {
  score: propTypes.number.isRequired,
  highScore: propTypes.number.isRequired,
};

export default Scoreboard;
