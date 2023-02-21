export const boardStyles = (boardWidth) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${boardWidth}, 1fr)`,
  gridTemplateRows: `repeat(${boardWidth}, 1fr)`,
  gridGap: '1px',
  border: '1px solid black',
  width: '500px',
  height: '500px',
});
