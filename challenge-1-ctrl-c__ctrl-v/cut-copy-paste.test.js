const { findFirstActionAndIndex } = require('./cut-copy-paste');

describe('findFirstActionAndIndex', () => {
  it('should return CTRL+C and correct index', () => {
    const input = 'The first[CTRL+C]';
    const output = { copy: 9 };
    expect(findFirstActionAndIndex(input)).toStrictEqual(output);
  });
});
