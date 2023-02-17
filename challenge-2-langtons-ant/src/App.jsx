import { useState } from 'react';
import './App.css';
import Cell from './components/Cell';

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

  return (
    <div style={boardStyles(4)} className='App'>
      {board.map((row) => row.map((cell) => <Cell cell={cell} />))}
    </div>
  );
}

export default App;
