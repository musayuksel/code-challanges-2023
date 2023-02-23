import { useState, useEffect } from 'react';
import { boardStyles } from '../styles/App.style';
import { expandGrid } from '../utils/expandGrid';
import { findNextMovesOfAnt } from '../utils/findNextMovesOfAnt';
import { initialAnt, initialBoard } from '../utils/initialBoardAndAnt';
import { invertColourOfLeavingCell } from '../utils/invertColourOfLeavingCell';
import Cell from './Cell';
export default function Board({ speed }) {
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
      setBoard(() =>
        invertColourOfLeavingCell(board, currentAntRow, currentAntCol)
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
    callMoveStepsEveryOneSec(speed);
  }, [board, currentAnt, speed]);

  const drawBoard = board.map((row, rowIndex) =>
    row.map((cell, cellIndex) => (
      <Cell
        key={`${rowIndex}-${cellIndex}`}
        currentAnt={
          currentAnt.currentPosition.join('-') === `${rowIndex}-${cellIndex}` &&
          currentAnt
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
