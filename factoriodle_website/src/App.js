import React, { useState } from "react";
import ReactDOM from "react-dom";
import BoxArray from "./BoxArray"; // Ensure this path is correct

function App() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendGuess(inputText);
      e.preventDefault();
    }
  };

  const sendGuess = (item) => {
    const queryParam = encodeURIComponent(item);
    fetch(`http://localhost:8000/echo?input=${queryParam}`)
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setInputText(data);
      })
      .catch((error) => {});
  };

  const inputStyle = {
    position: "fixed",
    left: "50%",
    bottom: "20px",
    transform: "translateX(-50%)",
    padding: "10px",
    width: "300px",
  };

  return (
    <div>
      <BoxArray inputText={inputText} />
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        style={inputStyle}
        placeholder="Enter text here..."
      />
    </div>
  );
}

export default App;
