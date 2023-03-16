import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const menageScore = (result) => {
    if (result === true) setScore(0);
    if (result === false) setScore(score + 1);
  };
  useEffect(() => {
    if (score > highScore) setHighScore(score);
  }, [score]);
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Scoreboard score={score} highScore={highScore} />
      <Container onPick={menageScore} />
    </div>
  );
}

export default App;
