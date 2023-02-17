import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { oneDown, oneLeft, oneRight, oneUp } from './utils/antMoves';

const board = [
  [false, false, false, false],
  [false, false, false, false],
  [false, true, false, false],
  [false, false, false, false],
];
const ant = {
  currentPosition: [2, 1],
  currentDirection: 'N',
};

describe('Utils functions :', () => {
  it('should find the oneUp index of ant', () => {
    const antNextPosition = oneUp(ant);
    const antNew = {
      currentPosition: [1, 1],
      currentDirection: 'N',
    };
    expect(antNextPosition).toEqual(antNew);
  });

  it('should find the oneDown index of ant', () => {
    const antNextPosition = oneDown(ant);
    const antNew = {
      currentPosition: [3, 1],
      currentDirection: 'D',
    };
    expect(antNextPosition).toEqual(antNew);
  });

  it('should find the oneLeft index of ant', () => {
    const antNextPosition = oneLeft(ant);
    const antNew = {
      currentPosition: [2, 0],
      currentDirection: 'L',
    };
    expect(antNextPosition).toEqual(antNew);
  });

  it('should find the oneRight index of ant', () => {
    const antNextPosition = oneRight(ant);
    const antNew = {
      currentPosition: [2, 2],
      currentDirection: 'R',
    };
    expect(antNextPosition).toEqual(antNew);
  });
});
