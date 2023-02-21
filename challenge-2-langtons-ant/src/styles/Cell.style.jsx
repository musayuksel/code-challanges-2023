export const cellStyle = (cell) => ({
  backgroundColor: `${cell ? 'black' : 'white'}`,
  border: '1px solid black',
  color: `${cell ? 'white' : 'black'}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
