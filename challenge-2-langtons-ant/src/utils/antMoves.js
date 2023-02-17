export const oneUp = (ant) => {
  const [currentRow, currentColumn] = ant.currentPosition;
  return {
    currentPosition: [currentRow - 1, currentColumn],
    direction: 'N',
  };
};

export const oneDown = (ant) => {
  const [currentRow, currentColumn] = ant.currentPosition;
  return {
    currentPosition: [currentRow + 1, currentColumn],
    direction: 'D',
  };
};

export const oneLeft = (ant) => {
  const [currentRow, currentColumn] = ant.currentPosition;
  return {
    currentPosition: [currentRow, currentColumn - 1],
    direction: 'L',
  };
};
