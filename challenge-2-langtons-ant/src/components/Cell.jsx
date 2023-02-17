import React from 'react';

export default function Cell({ cell }) {
  console.log({ cell });
  const cellStyle = {
    backgroundColor: `${cell ? 'black' : 'white'}`,
    border: '1px solid black',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return <div style={cellStyle}></div>;
}
