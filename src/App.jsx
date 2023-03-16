import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import Scoreboard from "./components/Scoreboard";
import Footer from "./components/Footer";

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
    <div className="wrapper">
      <div className="app">
        {/* <h1>Hello World!</h1> */}
        <Container onPick={menageScore} />
        <Scoreboard score={score} highScore={highScore} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
