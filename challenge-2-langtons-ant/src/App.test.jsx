import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { oneDown, oneUp } from './utils/antMoves';

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

  it('should find the oneDown index of ant', () => {
    const antNextPosition = oneDown(ant);
    const antNew = {
      currentPosition: [3, 1],
      direction: 'D',
    };
    expect(antNextPosition).toEqual(antNew);
  });
});
