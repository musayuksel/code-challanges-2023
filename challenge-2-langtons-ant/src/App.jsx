import { useState, useEffect } from 'react';
import Cell from './components/Cell';
import { findNextMovesOfAnt } from './utils/findNextMovesOfAnt';
import { boardStyles } from './styles/App.style';

function App() {
  const [board, setBoard] = useState([
    [false, false, false, false],
    [false, false, false, false],
    [false, true, false, false],
    [false, false, false, false],
  ]);

  const [currentAnt, setCurrentAnt] = useState({
    currentPosition: [2, 1],
    currentDirection: 'N',
  });

  useEffect(() => {
    function moveOneStep() {
      const [currentAntRow, currentAntCol] = currentAnt.currentPosition;
      const nextMovesOfAnt = findNextMovesOfAnt(
        currentAnt,
        board[currentAntRow][currentAntCol]
      );
      setCurrentAnt(nextMovesOfAnt);
      setBoard((prev) => {
        return prev.map((boardRow, rowIndex) => {
          return boardRow.map((boardCell, cellIndex) => {
            if (rowIndex === currentAntRow && cellIndex === currentAntCol) {
              return !boardCell;
            }
            return boardCell;
          });
        });
      });
    }
    const callMoveStepsEveryOneSec = (time) => {
      setTimeout(moveOneStep, time);
    };
    callMoveStepsEveryOneSec(1000);
  }, [board, currentAnt]);

  return (
    <div style={boardStyles(4)} className='App'>
      {board.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <Cell
            key={cellIndex}
            currentAnt={
              currentAnt.currentPosition.join('') ===
                `${rowIndex}${cellIndex}` && currentAnt
            }
            cell={cell}
          />
        ))
      )}
    </div>
  );
}

export default App;
