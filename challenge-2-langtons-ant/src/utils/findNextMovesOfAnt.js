// get current position and colour of the cell
// find next moves direction
// if currentDirection is N and cell is black
// nextMove is oneRight
import { antMoves } from './antMoves';
export const findNextMovesOfAnt = (ant, currentCell) => {
  if (
    (ant.currentDirection === 'N' && currentCell) ||
    (ant.currentDirection === 'S' && !currentCell)
  ) {
    return antMoves['oneRight'](ant);
  } else if (
    (ant.currentDirection === 'N' && !currentCell) ||
    (ant.currentDirection === 'S' && currentCell)
  ) {
    return antMoves['oneLeft'](ant);
  }
  if (
    (ant.currentDirection === 'E' && currentCell) ||
    (ant.currentDirection === 'W' && !currentCell)
  ) {
    return antMoves['oneDown'](ant);
  }
  if (
    (ant.currentDirection === 'E' && !currentCell) ||
    (ant.currentDirection === 'W' && currentCell)
  ) {
    return antMoves['oneUp'](ant);
  }
};
