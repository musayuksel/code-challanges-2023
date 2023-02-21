import React from 'react';
import { cellStyle } from '../styles/Cell.style';

export default function Cell({ cell, currentAnt }) {
  return <div style={cellStyle(cell)}>{currentAnt.currentDirection}</div>;
}
