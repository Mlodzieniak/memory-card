/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import propTypes from "prop-types";

function Scoreboard(props) {
  const { score, highScore } = props;
  return (
    <div className="scoreboard">
      <div>
        <p className="score-title">Current score: </p>
        <h3 className="score">{score}</h3>
      </div>
      <div>
        <p className="score-title">Highest score:</p>
        <h3 className="score">{highScore}</h3>
      </div>
    </div>
  );
}
Scoreboard.propTypes = {
  score: propTypes.number.isRequired,
  highScore: propTypes.number.isRequired,
};

export default Scoreboard;
