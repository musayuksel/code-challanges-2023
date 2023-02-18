import { useState } from 'react';
import './App.css';
import Cell from './components/Cell';
import { findNextMovesOfAnt } from './utils/findNextMovesOfAnt';

function App() {
  const boardStyles = (boardWidth) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${boardWidth}, 1fr)`,
    gridGap: '1px',
    border: '1px solid black',
    width: '500px',
    height: '500px',
  });
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

  const next = findNextMovesOfAnt(currentAnt, true);

  return (
    <div style={boardStyles(4)} className='App'>
      {board.map((row) =>
        row.map((cell, index) => <Cell key={index} cell={cell} />)
      )}
    </div>
  );
}

export default App;
