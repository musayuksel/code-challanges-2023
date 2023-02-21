import { invertColourOfLeavingCell } from './invertColourOfLeavingCell';

const mockBoard = [
  [false, false],
  [false, true],
];
const mockAnt = {
  currentPosition: [1, 1],
  currentDirection: 'N',
};
const [currentAntRow, currentAntCol] = mockAnt.currentPosition;

describe('invertColourOfLeavingCell :', () => {
  it('should convert the cell to black if the current one is white', () => {
    const newBoard = invertColourOfLeavingCell(
      mockBoard,
      currentAntRow,
      currentAntCol
    );
    const expectedNewBoard = [
      [false, false],
      [false, false],
    ];
    expect(newBoard).toEqual(expectedNewBoard);
  });
});
