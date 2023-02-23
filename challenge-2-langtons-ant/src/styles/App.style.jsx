export const boardStyles = (boardWidth) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${boardWidth}, 1fr)`,
  gridTemplateRows: `repeat(${boardWidth}, 1fr)`,
  gridGap: '1px',
  border: '1px solid #efefef',
  height: '90vw',
  maxWidth: '750px',
  maxHeight: '750px',
  width: '90vw',
});
