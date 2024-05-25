import SquareArray from "./SquareArray.js";
import GuessBar from "./GuessBar.js";
import { useState } from "react";

function App() {
  const [guesses, setGuesses] = useState([["lol", "lol2"]]);

  const queryGuess = (guess) => {
    return ["blue", "red", "green", "yellow"];
  };

  const handleGuess = (guess) => {
    let result = queryGuess(guess);
    setGuesses([...guesses, result]);
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex flex-col flex-grow items-center justify-center">
        {guesses.slice().reverse().map((guess, index) => (
          <SquareArray key={index} guess={guess}></SquareArray>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 flex justify-center mb-4">
        <GuessBar guessHandler={handleGuess}></GuessBar>
      </div>
    </div>
  );
}

export default App;
