import Square from "./Square";

function SquareArray({ guess }) {
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
  };

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
  };

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
        return value
          .slice()
          .map((color) => colorFunction(color))
          .join(", ");
      case "Ingredients":
        return value.slice().join(", ");
      case "Category":
        return categoryFunction(value);
      case "Science":
        return scienceFunction(value) + " science";
      case "CraftingTime":
        return value + "s";
      default:
        return value;
    }
  };

  const parseItemResponse = (item) => {
    const result = Object.keys(item)
      .filter((key) => key !== "Name")
      .map((key) => {
        return strategyFunction(key, item[key]);
      });
    return result;
  };

  const parseColors = (guess) => {
    return Object.keys(guess)
      .filter((key) => key !== "Item")
      .map((key) => {
        return guess[key];
      });
  };

  const itemText = guess.Item.Name;
  const guessText = parseItemResponse(guess.Item);
  const guessColors = parseColors(guess);

  return (
    <div className="flex">
      <Square text={itemText} color={3}></Square>
      {guessText.map((guess, index) => {
        return (
          <Square key={index} text={guess} color={guessColors[index]}></Square>
        );
      })}
    </div>
  );
}

export default SquareArray;
