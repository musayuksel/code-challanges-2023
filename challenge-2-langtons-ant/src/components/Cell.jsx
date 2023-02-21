import React from 'react';
import { antImageStyle, cellStyle } from '../styles/Cell.style';
import antImage from '../assets/ant.svg';
export default function Cell({ cell, currentAnt }) {
  return (
    <div style={cellStyle(cell)}>
      {currentAnt && (
        <img
          style={antImageStyle(currentAnt.currentDirection)}
          src={antImage}
          alt='A red cartoon ant'
        />
      )}
    </div>
  );
}
