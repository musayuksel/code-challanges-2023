function findFirstCommandAndIndex(inputText) {
  const copyIndex =
    inputText.indexOf('[CTRL+C]') > -1
      ? inputText.indexOf('[CTRL+C]')
      : Infinity;
  const pasteIndex =
    inputText.indexOf('[CTRL+V]') > -1
      ? inputText.indexOf('[CTRL+V]')
      : Infinity;

  const commandAndIndex = ['nothing', -1];
  if (copyIndex < pasteIndex) {
    commandAndIndex[0] = 'copy';
    commandAndIndex[1] = copyIndex;
  } else if (pasteIndex < copyIndex) {
    commandAndIndex[0] = 'paste';
    commandAndIndex[1] = pasteIndex;
  }

  return commandAndIndex;
}

module.exports = {
  findFirstCommandAndIndex,
};
