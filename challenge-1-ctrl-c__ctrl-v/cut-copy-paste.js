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

const isInputIncludesCopyPaste = (input) =>
  input.includes('[CTRL+C]') ||
  input.includes('[CTRL+V]') ||
  input.includes('[CTRL+X]');

function challenge(input) {
  let clipboard = '';

  while (isInputIncludesCopyPaste(input)) {
    const [command, index] = findFirstCommandAndIndex(input);

    if (command === 'copy') {
      clipboard = input.slice(0, index);
      input = input.replace('[CTRL+C]', '');
    } else if (command === 'paste') {
      input = input.replace('[CTRL+V]', clipboard);
    }
    console.log({ command, index, clipboard, input });
  }
  return input;
}

module.exports = {
  findFirstCommandAndIndex,
  isInputIncludesCopyPaste,
  challenge,
};
