// get current position and colour of the cell
// find next moves direction
// if currentDirection is N and cell is black
// nextMove is oneRight
import { antMoves } from './antMoves';
export const findNextMovesOfAnt = (ant, currentCell) => {
  if (
    (ant.currentDirection === 'N' && currentCell === true) ||
    (ant.currentDirection === 'S' && currentCell === false)
  )
    return antMoves['oneRight'](ant);
  if (
    (ant.currentDirection === 'N' && currentCell === false) ||
    (ant.currentDirection === 'S' && currentCell === true)
  )
    return antMoves['oneLeft'](ant);
  if (
    (ant.currentDirection === 'E' && currentCell === true) ||
    (ant.currentDirection === 'W' && currentCell === false)
  )
    return antMoves['oneDown'](ant);
};
