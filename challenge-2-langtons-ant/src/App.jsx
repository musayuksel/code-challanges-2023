import { useState, useEffect } from 'react';
import Cell from './components/Cell';
import { findNextMovesOfAnt } from './utils/findNextMovesOfAnt';
import { boardStyles } from './styles/App.style';
import { invertColourOfLeavingCell } from './utils/invertColourOfLeavingCell';
import { initialAnt, initialBoard } from './utils/initialBoardAndAnt';

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
      setTimeout(moveOneStep, time);
    };
    callMoveStepsEveryOneSec(1000);
  }, [board, currentAnt]);

  const drawBoard = board.map((row, rowIndex) =>
    row.map((cell, cellIndex) => (
      <Cell
        key={cellIndex}
        currentAnt={
          currentAnt.currentPosition.join('') === `${rowIndex}${cellIndex}` &&
          currentAnt
        }
        cell={cell}
      />
    ))
  );

  return (
    <div style={boardStyles(4)} className='App'>
      {drawBoard}
    </div>
  );
}

export default App;
