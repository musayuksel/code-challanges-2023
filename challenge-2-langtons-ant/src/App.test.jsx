import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { oneUp } from './utils/antMoves';

const board = [
  [false, false, false, false],
  [false, false, false, false],
  [false, true, false, false],
  [false, false, false, false],
];
const ant = {
  currentPosition: [2, 1],
  direction: 'N',
};

describe('Utils functions :', () => {
  it('should find the oneUp index of ant', () => {
    const antNextPosition = oneUp(ant);
    const antNew = {
      currentPosition: [1, 1],
      direction: 'N',
    };
    expect(antNextPosition).toEqual(antNew);
  });
});
