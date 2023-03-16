import React, { useEffect, useState } from "react";
import Container from "./components/Container";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Scoreboard score={score} />
      <Container />
    </div>
  );
}

export default App;
