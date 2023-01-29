const findIndexOfCommand = (inputText, command) =>
  inputText.indexOf(command) > -1 ? inputText.indexOf(command) : Infinity;

function findFirstCommandAndIndex(inputText) {
  const commandsAndIndexes = [
    { command: 'copy', index: findIndexOfCommand(inputText, '[CTRL+C]') },
    { command: 'paste', index: findIndexOfCommand(inputText, '[CTRL+V]') },
    { command: 'cut', index: findIndexOfCommand(inputText, '[CTRL+X]') },
  ];

  //find FIRST command index
  const { command, index } = commandsAndIndexes.sort(
    (a, b) => a.index - b.index
  )[0];
  // return first command [command, index]=>[copy,9]
  return index !== Infinity ? [command, index] : ['nothing', -1]; //default
}

const isInputIncludesCopyPaste = (input) =>
  input.includes('[CTRL+C]') ||
  input.includes('[CTRL+V]') ||
  input.includes('[CTRL+X]');

//MAIN FUNCTION
function challenge(input) {
  let clipboard = '';

  while (isInputIncludesCopyPaste(input)) {
    const [command, index] = findFirstCommandAndIndex(input);

    if (command === 'copy') {
      clipboard = input.slice(0, index);
      input = input.replace('[CTRL+C]', '');
    } else if (command === 'paste') {
      input = input.replace('[CTRL+V]', clipboard);
    } else if (command === 'cut') {
      clipboard = input.slice(0, index); //copy first part of input in to clipboard
      input = input.slice(index); //cut it from input
      input = input.replace('[CTRL+X]', '');
    }
  }
  return input;
}

// challenge('the first[CTRL+X] [CTRL+V]');
module.exports = {
  findIndexOfCommand,
  findFirstCommandAndIndex,
  isInputIncludesCopyPaste,
  challenge,
};
