import SquareArray from "./SquareArray.js";
import GuessBar from "./GuessBar.js";
import { useState } from "react";

function App() {
  const [guesses, setGuesses] = useState([]);

  const queryGuess = (guess) => {
    return fetch(
      `http://localhost:8000/guess?input=${encodeURIComponent(guess)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching request: ", error);
        return {};
      });
  };

  const handleGuess = async (guess) => {
    let json_body = await queryGuess(guess);
    setGuesses([...guesses, json_body]);
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex flex-col flex-grow items-center justify-center">
        {guesses
          .slice()
          .reverse()
          .map((guess, index) => (
            <SquareArray key={index} guess={guess}></SquareArray>
          ))}
      </div>

      <div className="fixed top-0 left-0 right-0 flex justify-center mt-4">
        <GuessBar guessHandler={handleGuess}></GuessBar>
      </div>
    </div>
  );
}

export default App;
