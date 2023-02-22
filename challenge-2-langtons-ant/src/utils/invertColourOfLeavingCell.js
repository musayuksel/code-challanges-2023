export const invertColourOfLeavingCell = (
  board,
  currentAntRow,
  currentAntCol
) => {
  return board.map((boardRow, rowIndex) =>
    boardRow.map((boardCell, cellIndex) =>
      rowIndex === currentAntRow && cellIndex === currentAntCol
        ? !boardCell
        : boardCell
    )
  );
};
