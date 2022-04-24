import { useState } from "react";
import { Square } from "./components/square";
import { checkWinner } from "./components/checkWinner";
import "./styles.css";

export default function App() {
  const [crntPalyer, setPlayer] = useState("🔥");

  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(false);

  const handleChange = (id) => {
    const boardCopy = [...board];
    if (winner || boardCopy[id]) return;
    setWinner((prev) => (checkWinner(boardCopy) ? crntPalyer : false));

    boardCopy[id] = crntPalyer;
    setBoard(boardCopy);
    setPlayer((prev) => (prev === "🔥" ? "💧" : "🔥"));
  };

  return (
    <div className="App">
      <h1>🔥Fire vs Water💧</h1>
      <div id="squares" className={crntPalyer}>
        <Square
          crntPalyer={crntPalyer}
          board={board}
          handleChange={handleChange}
        />
      </div>
      {winner ? <h1>Winner is {winner}</h1> : ""}
      <h3>
        Current Player <span>{crntPalyer + crntPalyer + crntPalyer}</span>
      </h3>
      <button onClick={() => (setBoard(Array(9).fill(null)), setWinner(false))}>
        Reset
      </button>
      <br />
    </div>
  );
}
