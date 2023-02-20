import React from 'react';

export default function Cell({ cell, currentAnt }) {
  //   console.log(currentAnt);
  const cellStyle = {
    backgroundColor: `${cell ? 'black' : 'white'}`,
    border: '1px solid black',
    color: `${cell ? 'white' : 'black'}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return <div style={cellStyle}>{currentAnt.currentDirection}</div>;
}
