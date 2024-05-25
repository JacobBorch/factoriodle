import Square from "./Square";

function SquareArray({guess}) {

  const guessArray = guess.slice();

    return (
      <div className="flex">
        {guessArray.map((guess, index) => {
          return <Square key={index} text={guess}></Square>
        })}
      </div>
    );
  }
  
  export default SquareArray;
  