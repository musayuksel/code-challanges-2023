function findIndexOfCommand(inputText, command) {
  return inputText.indexOf(command) > -1
    ? inputText.indexOf(command)
    : Infinity;
}

function findFirstCommandAndIndex(inputText) {
  const copyIndex = findIndexOfCommand(inputText, '[CTRL+C]');
  const pasteIndex = findIndexOfCommand(inputText, '[CTRL+V]');
  const cutIndex = findIndexOfCommand(inputText, '[CTRL+X]');

  const firstCommand = [
    { command: 'copy', index: copyIndex },
    { command: 'paste', index: pasteIndex },
    { command: 'cut', index: cutIndex },
  ]
    .filter((command) => command.index !== Infinity)
    .sort((a, b) => a.index - b.index)[0];
  console.log({ firstCommand });
  const commandAndIndex = ['nothing', -1];
  if (firstCommand?.command) {
    commandAndIndex[0] = firstCommand.command;
    commandAndIndex[1] = firstCommand.index;
  }
  return commandAndIndex;
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
      input = input.replace('[CTRL+X]', ''); //delete command
    }
    console.log({ command, index, clipboard, input });
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
