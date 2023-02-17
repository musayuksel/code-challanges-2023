export const oneUp = (ant) => {
  const [currentRow, currentColumn] = ant.currentPosition;
  return {
    currentPosition: [currentRow - 1, currentColumn],
    currentDirection: 'N',
  };
};

export const oneDown = (ant) => {
  const [currentRow, currentColumn] = ant.currentPosition;
  return {
    currentPosition: [currentRow + 1, currentColumn],
    currentDirection: 'S',
  };
};

export const oneLeft = (ant) => {
  const [currentRow, currentColumn] = ant.currentPosition;
  return {
    currentPosition: [currentRow, currentColumn - 1],
    currentDirection: 'W',
  };
};

export const oneRight = (ant) => {
  const [currentRow, currentColumn] = ant.currentPosition;
  return {
    currentPosition: [currentRow, currentColumn + 1],
    currentDirection: 'E',
  };
};

export const antMoves = {
  oneUp,
  oneDown,
  oneLeft,
  oneRight,
};
