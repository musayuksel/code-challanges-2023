import { useState, useEffect } from 'react';
import Cell from './components/Cell';
import { findNextMovesOfAnt } from './utils/findNextMovesOfAnt';
import { boardStyles } from './styles/App.style';
import { invertColourOfLeavingCell } from './utils/invertColourOfLeavingCell';
import { initialAnt, initialBoard } from './utils/initialBoardAndAnt';
import { expandGrid } from './utils/expandGrid';

function App() {
  const [board, setBoard] = useState(initialBoard);
  const [currentAnt, setCurrentAnt] = useState(initialAnt);

  useEffect(() => {
    function moveOneStep() {
      const [currentAntRow, currentAntCol] = currentAnt.currentPosition;
      const nextMovesOfAnt = findNextMovesOfAnt(
        currentAnt,
        board[currentAntRow][currentAntCol]
      );
      setCurrentAnt(nextMovesOfAnt);
      setBoard((prevBoard) =>
        invertColourOfLeavingCell(prevBoard, currentAntRow, currentAntCol)
      );
    }
    const callMoveStepsEveryOneSec = (time) => {
      setTimeout(() => {
        moveOneStep();
        if (
          currentAnt.currentPosition[0] <= 0 ||
          currentAnt.currentPosition[0] >= board.length - 1 ||
          currentAnt.currentPosition[1] <= 0 ||
          currentAnt.currentPosition[1] >= board.length - 1
        ) {
          expandGrid(setCurrentAnt, setBoard);
        }
      }, time);
    };
    callMoveStepsEveryOneSec(2);
  }, [board, currentAnt]);

  const drawBoard = board.map((row, rowIndex) =>
    row.map((cell, cellIndex) => (
      <Cell
        key={`${rowIndex}-${cellIndex}`}
        currentAnt={
          currentAnt.currentPosition.join('-') === `${rowIndex}-${cellIndex}`
            ? currentAnt
            : undefined
        }
        cell={cell}
      />
    ))
  );

  return (
    <>
      <div style={boardStyles(board.length)} className='App'>
        {drawBoard}
      </div>
    </>
  );
}

export default App;
