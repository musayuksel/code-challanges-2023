const {
  findFirstCommandAndIndex,
  isInputIncludesCopyPaste,
  challenge,
} = require('./cut-copy-paste');

// findFirstCommandAndIndex helper function
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

  it("should return nothing if input doesn't have any copy-paste", () => {
    const input = 'The first challenge';
    const output = ['nothing', -1];
    expect(findFirstCommandAndIndex(input)).toStrictEqual(output);
  });
});

// isInputIncludesCopyPaste helper function
describe('isInputIncludesCopyPaste :', () => {
  it('should return true if the input includes [CTR+C]', () => {
    const input = 'the first[CTRL+C]';

    expect(isInputIncludesCopyPaste(input)).toBe(true);
  });

  it('should return true if the input includes [CTR+V]', () => {
    const input = 'the second command is [CTRL+V]';

    expect(isInputIncludesCopyPaste(input)).toBe(true);
  });

  it("should return false if the input doesn't includes [CTR+C] or [CTR+V]", () => {
    const input = 'There is any copy or paste command';

    expect(isInputIncludesCopyPaste(input)).toBe(false);
  });

  // CTRL+X
  it('should return true if the input includes [CTR+X]', () => {
    const input = 'the second command is [CTRL+X]';

    expect(isInputIncludesCopyPaste(input)).toBe(true);
  });
});

// MAIN challenge function
describe('challenge : ', () => {
  it('should return the same text if there is any copy paste', () => {
    const input = 'This text should return exactly the same!';
    expect(challenge(input)).toEqual(input);
  });

  it('should return the text without [CTRL+C] in text', () => {
    const input = 'the first[CTRL+C]';
    const output = 'the first';
    expect(challenge(input)).toEqual(output);
  });

  it('should return the text with pasted text', () => {
    const input = 'the first[CTRL+C] [CTRL+V]';
    const output = 'the first the first';
    expect(challenge(input)).toEqual(output);
  });

  it('should return the text with pasted text', () => {
    const input = 'the first[CTRL+C] [CTRL+V]';
    const output = 'the first the first';
    expect(challenge(input)).toEqual(output);
  });

  it('should repeat if there are multiple copy paste', () => {
    const input = 'first[CTRL+C] [CTRL+V] and second[CTRL+C] [CTRL+V]';
    const output = 'first first and second first first and second';
    expect(challenge(input)).toEqual(output);
  });

  it('should NOT paste anything if the clipboard is empty', () => {
    const input =
      '[CTRL+V]the tall oak tree towers over the lush green meadow.';
    const output = 'the tall oak tree towers over the lush green meadow.';
    expect(challenge(input)).toEqual(output);
  });
});
