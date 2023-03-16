import React from "react";
import propTypes from "prop-types";

function Scoreboard(props) {
  const { score } = props;
  return (
    <div className="scoreboard">
      <p className="current-score">{score}</p>
    </div>
  );
}
Scoreboard.propTypes = {
  score: propTypes.number.isRequired,
};

export default Scoreboard;
