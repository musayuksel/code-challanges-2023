import { findNextMovesOfAnt } from './findNextMovesOfAnt';

const mockAnt = {
  currentPosition: [2, 1],
  currentDirection: 'N',
};

const currentCellBlack = true;

describe('findNextMovesOfAnt :', () => {
  it('should move to oneRight if currentDirection is N and the cell is black', () => {
    const antNewPosition = findNextMovesOfAnt(mockAnt, currentCellBlack);
    const antNextPosition = {
      currentPosition: [2, 2],
      currentDirection: 'E',
    };
    expect(antNewPosition).toEqual(antNextPosition);
  });

  it('should move to oneLeft if currentDirection is N and the cell is white', () => {
    const antNewPosition = findNextMovesOfAnt(mockAnt, !currentCellBlack);
    const antNextPosition = {
      currentPosition: [2, 0],
      currentDirection: 'W',
    };
    expect(antNewPosition).toEqual(antNextPosition);
  });

  it('should move to oneLeft if currentDirection is S and the cell is white', () => {
    mockAnt.currentDirection = 'S';
    const antNewPosition = findNextMovesOfAnt(mockAnt, !currentCellBlack);
    const antNextPosition = {
      currentPosition: [2, 2],
      currentDirection: 'E',
    };
    expect(antNewPosition).toEqual(antNextPosition);
  });

  it('should move to oneRight if currentDirection is S and the cell is black', () => {
    mockAnt.currentDirection = 'S';
    const antNewPosition = findNextMovesOfAnt(mockAnt, currentCellBlack);
    const antNextPosition = {
      currentPosition: [2, 0],
      currentDirection: 'W',
    };
    expect(antNewPosition).toEqual(antNextPosition);
  });
});
