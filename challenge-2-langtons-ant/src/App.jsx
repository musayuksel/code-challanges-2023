import { useState } from 'react';
import Board from './components/Board';

function App() {
  const [speed, setSpeed] = useState(1000);
  const [isStart, setIsStart] = useState(false);

  function handleSpeedChange(event) {
    setSpeed(+event.target.value);
  }
  function handleStart() {
    setIsStart(true);
  }

  return (
    <main>
      {isStart ? (
        <Board speed={speed} />
      ) : (
        <section className='select-box'>
          <select
            onChange={handleSpeedChange}
            id='select-menu'
            className='select-menu'
          >
            <option value={1000}> Choose speed</option>
            <option value={1}>Very Fast</option>
            <option value={200}>Fast</option>
            <option value={500}>Medium</option>
            <option value={700}>Slow</option>
            <option value={1200}>Very Slow</option>
          </select>
          <button className='start-btn' onClick={handleStart}>
            Start
          </button>
        </section>
      )}
    </main>
  );
}

export default App;
