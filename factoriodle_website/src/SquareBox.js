import React from 'react';

function SquareBox({ size = 100, color = 'white' }) {
  const style = {
    height: `${size}px`,
    width: `${size}px`,
    backgroundColor: color,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    border: '1px solid #000'
  };

  return <div style={style}></div>;
}

export default SquareBox;
