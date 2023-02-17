import { useState } from 'react';
import './App.css';
import Cell from './components/Cell';

function App() {
  const [board, setBoard] = useState([
    [false, false],
    [false, false],
  ]);

  return <div className='App'>{board.map((row) => row.map(Cell))}</div>;
}

export default App;
