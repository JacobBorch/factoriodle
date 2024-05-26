import React from 'react';

function Square({ text, color }) {
  function StatusToColor(status) {
    switch (status) {
      case 0:
        return "bg-red-600";
      case 1:
        return "bg-orange-400";
      case 2:
        return "bg-green-600";
      default:
        return "bg-blue-600"; // Should not happen
    }
  }

  const colorClass = StatusToColor(color);

  return (
    <div className={`${colorClass} flex justify-center items-center w-20 h-20 border-black border-2 rounded-lg mx-1 my-1`}>
      <h1 className="text-center text-white">{text}</h1>
    </div>
  );
}

export default Square;
