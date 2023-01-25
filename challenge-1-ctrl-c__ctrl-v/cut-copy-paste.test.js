const { findFirstActionAndIndex } = require('./cut-copy-paste');

describe('findFirstActionAndIndex', () => {
  it('should return CTRL+C and correct index', () => {
    const input = 'The first[CTRL+C]';
    const output = { copy: 9 };
    expect(findFirstActionAndIndex(input)).toStrictEqual(output);
  });

  it('should return CTRL+C and correct index', () => {
    const input = 'The first[CTRL+C] [CTRL+V]';
    const output = { copy: 9 };
    expect(findFirstActionAndIndex(input)).toStrictEqual(output);
  });

  it('should return CTRL+C and correct index', () => {
    const input = 'The first challenge[CTRL+C]';
    const output = { copy: 19 };
    expect(findFirstActionAndIndex(input)).toStrictEqual(output);
  });
});
