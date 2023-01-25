function findFirstActionAndIndex(inputText) {
  const copyIndex = inputText.indexOf('[CTRL+C]');
  const pasteIndex = inputText.indexOf('[CTRL+V]');

  return { copy: copyIndex };
}

module.exports = {
  findFirstActionAndIndex,
};
