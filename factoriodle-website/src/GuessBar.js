import React, { useState } from "react";
import Select from "react-select";

function GuessBar({ guessHandler }) {
  const initialOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [options, setOptions] = useState(initialOptions);
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const findMatchingIndex = (value) => {
    return options.findIndex(
      (option) => option.value.toLowerCase() === value.toLowerCase()
    );
  }

  const removeOption = (matchingIdx) => {
    const newOptions = options.filter((_, idx) => idx !== matchingIdx);
    setOptions(newOptions);
  }

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    if (!selectedOption) {
      return;
    }
    handleChange(selectedOption);
  };

  const handleChange = (selected) => {
    setSelectedOption(selected);
    if (!selected) {
      return;
    }
    const matchingIdx = findMatchingIndex(selected.value);
    if (matchingIdx === -1) {
      return;
    }
    const matching = options[matchingIdx];
    removeOption(matchingIdx);
    
    guessHandler(matching.value);
    setSelectedOption(null);
    setInputValue(""); // Clear the input value after selection
  };

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  const filterOption = (option, inputValue) => {
    if (!inputValue) {
      return false;
    }
    return option.label.toLowerCase().startsWith(inputValue.toLowerCase());
  };

  return (
    <div className="mb-6 w-96 justify-center">
      <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        filterOption={filterOption}
        isClearable={true}
      />
    </div>
  );
}

export default GuessBar;
