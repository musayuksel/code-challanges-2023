import { invertColourOfLeavingCell } from './invertColourOfLeavingCell';

const mockBoard = [
  [false, false],
  [false, true],
];
const mockBoardWithBlack = [
  [false, false],
  [false, false],
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

  it('should convert the cell to white if the current one is black', () => {
    const newBoard = invertColourOfLeavingCell(
      mockBoardWithBlack,
      currentAntRow,
      currentAntCol
    );
    const expectedNewBoard = [
      [false, false],
      [false, true],
    ];
    expect(newBoard).toEqual(expectedNewBoard);
  });
});
