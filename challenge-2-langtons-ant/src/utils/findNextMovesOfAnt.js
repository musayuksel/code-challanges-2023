// get current position and colour of the cell
// find next moves direction
// if currentDirection is N and cell is black
// nextMove is oneRight
import { antMoves } from './antMoves';
export const findNextMovesOfAnt = (ant, currentCell) => {
  if (ant.currentDirection === 'N' && currentCell === true)
    return antMoves['oneRight'](ant);
};
