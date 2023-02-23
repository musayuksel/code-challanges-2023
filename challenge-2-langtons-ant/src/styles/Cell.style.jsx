export const cellStyle = (cell) => ({
  backgroundColor: `${cell ? 'black' : 'white'}`,
  border: '1px solid #aaa',
  color: `${cell ? 'white' : 'black'}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const antImageStyle = (currentDirection) => {
  const newRotate = `${
    currentDirection === 'N'
      ? 0
      : currentDirection === 'E'
      ? 90
      : currentDirection === 'S'
      ? 180
      : 270
  }`;
  return {
    with: '90%',
    height: '90%',
    objectFit: 'cover',
    transform: `rotate(${newRotate}deg)`,
  };
};
