import { oneDown, oneLeft, oneRight, oneUp } from './antMoves';

const MockAnt = {
  currentPosition: [2, 1],
  currentDirection: 'N',
};

describe('Utils functions :', () => {
  describe('Ant Moves :', () => {
    it('should find the oneUp index of ant', () => {
      const antNextPosition = oneUp(MockAnt);
      const antNew = {
        currentPosition: [1, 1],
        currentDirection: 'N',
      };
      expect(antNextPosition).toEqual(antNew);
    });

    it('should find the oneDown index of ant', () => {
      const antNextPosition = oneDown(MockAnt);
      const antNew = {
        currentPosition: [3, 1],
        currentDirection: 'D',
      };
      expect(antNextPosition).toEqual(antNew);
    });

    it('should find the oneLeft index of ant', () => {
      const antNextPosition = oneLeft(MockAnt);
      const antNew = {
        currentPosition: [2, 0],
        currentDirection: 'L',
      };
      expect(antNextPosition).toEqual(antNew);
    });

    it('should find the oneRight index of ant', () => {
      const antNextPosition = oneRight(MockAnt);
      const antNew = {
        currentPosition: [2, 2],
        currentDirection: 'R',
      };
      expect(antNextPosition).toEqual(antNew);
    });
  });
});
