import { useState } from "react";
import GamePage from "./Components/GamePage";
import Score from "./Components/Score";
import StartGame from "./Components/StartGame";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  function toggleGamePlay() {
    setIsGameStarted(!isGameStarted);
  }

  return (
    <>{isGameStarted ? <GamePage /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
