import React from 'react';
import SquareBox from './SquareBox'; // Ensure this path is correct

function BoxArray() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px', // This sets the space between the boxes
    height: '100vh', // This makes sure the container takes full viewport height
  };

  return (
    <div style={containerStyle}>
      <SquareBox>Box 1</SquareBox>
      <SquareBox>Box 2</SquareBox>
      <SquareBox>Box 3</SquareBox>
      <SquareBox>Box 4</SquareBox>
      <SquareBox>Box 5</SquareBox>
    </div>
  );
}

export default BoxArray;
