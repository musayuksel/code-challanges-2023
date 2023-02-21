export const invertColourOfLeavingCell = (
  board,
  currentAntRow,
  currentAntCol
) => {
  return board.map((boardRow, rowIndex) => {
    return boardRow.map((boardCell, cellIndex) => {
      if (rowIndex === currentAntRow && cellIndex === currentAntCol) {
        return !boardCell;
      }
      return boardCell;
    });
  });
};
