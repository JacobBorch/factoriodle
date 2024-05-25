import SquareArray from "./SquareArray.js";
import GuessBar from "./GuessBar.js";
import { useState } from "react";

function App() {
  const [guesses, setGuesses] = useState([]);

  const queryGuess = async (guess) => {
    try {
      const response = await fetch(
        `http://localhost:8000/guess?input=${encodeURIComponent(guess)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching request: ", error);
      return ["error", guess];
    }
  };

  const scienceFunction = (scienceCode) => {
    switch (scienceCode) {
      case 0:
        return "Red";
      case 1:
        return "Green";
      case 2:
        return "Blue";
      case 3:
        return "Purple";
      case 4:
        return "Yellow";
      case 5:
        return "White";
      default:
        return "unknown";
    }
  }

  const categoryFunction = (categoryCode) => {
    switch (categoryCode) {
      case 0:
        return "Logistics";
      case 1:
        return "Automation";
      case 2:
        return "Intermediate";
      case 3:
        return "Combat";
      default:
        return "unknown";
    }
  }

  const colorFunction = (colorCode) => {
    switch (colorCode) {
      case 0:
        return "brown";
      case 1:
        return "grey";
      case 2:
        return "yellow";
      case 3:
        return "red";
      default:
        return "unknown";
    }
  };

  const strategyFunction = (key, value) => {
    switch (key) {
      case "Color":
        return value.slice().map((color) => colorFunction(color)).join(", ");
      case "Ingredients":
        return value.slice().join(", ");
      case "Category":
        return categoryFunction(value);
      case "Science":
        return scienceFunction(value) + " science";
      default:
        return value;
    }
  };

  const parseItemResponse = (item) => {
    const result = Object.keys(item).map((key) => {
      return strategyFunction(key, item[key]);
    });
    console.log(result);
    return result;
  };

  const handleGuess = async (guess) => {
    let json_body = await queryGuess(guess);
    let result = parseItemResponse(json_body.Item);
    setGuesses([...guesses, result]);
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

      <div className="fixed bottom-0 left-0 right-0 flex justify-center mb-4">
        <GuessBar guessHandler={handleGuess}></GuessBar>
      </div>
    </div>
  );
}

export default App;
