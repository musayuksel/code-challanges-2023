const { findFirstCommandAndIndex } = require('./cut-copy-paste');

describe('findFirstCommandAndIndex', () => {
  it('should return CTRL+C and correct index', () => {
    const input = 'The first[CTRL+C]';
    const output = ['copy', 9];
    expect(findFirstCommandAndIndex(input)).toStrictEqual(output);
  });

  it('should return CTRL+C and correct index', () => {
    const input = 'The first[CTRL+C] [CTRL+V]';
    const output = ['copy', 9];
    expect(findFirstCommandAndIndex(input)).toStrictEqual(output);
  });

  it('should return CTRL+C and correct index', () => {
    const input = 'The first challenge[CTRL+C]';
    const output = ['copy', 19];
    expect(findFirstCommandAndIndex(input)).toStrictEqual(output);
  });

  it('should return CTRL+V and correct index', () => {
    const input = 'The first challenge[CTRL+V]';
    const output = ['paste', 19];
    expect(findFirstCommandAndIndex(input)).toStrictEqual(output);
  });
});
