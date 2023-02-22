export const expandGrid = (setCurrentAnt, setBoard) => {
  setCurrentAnt((prevAnt) => {
    const newPositionOfAnt = [
      prevAnt.currentPosition[0] + 1,
      prevAnt.currentPosition[1] + 1,
    ];
    return {
      ...prevAnt,
      currentPosition: newPositionOfAnt,
    };
  });
  setBoard((prevBoard) => {
    const newBoardLength = prevBoard.length + 2;
    const newRow = new Array(newBoardLength).fill(false);

    const newBoard = prevBoard.map((row) => [false, ...row, false]);
    return [newRow, ...newBoard, newRow];
  });
};
