import { findNextMovesOfAnt } from './findNextMovesOfAnt';

const mockAnt = {
  currentPosition: [2, 1],
  currentDirection: 'N',
};
describe('findNextMovesOfAnt :', () => {
  it('should move to oneRight if currentDirection is N and the cell is black', () => {
    const antNewPosition = findNextMovesOfAnt(mockAnt, true);
    const antNextPosition = {
      currentPosition: [2, 2],
      currentDirection: 'E',
    };
    expect(antNewPosition).toEqual(antNextPosition);
  });
});
