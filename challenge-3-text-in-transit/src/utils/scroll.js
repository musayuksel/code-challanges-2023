export const scroll = (text, screenWidth = 4) => {
  //add empty space to the left and right of the text amount of screenWidth
  //start from the left side and get screenWidth number of characters
  //then move one character to the right and get screenWidth number of characters
  //do it until the end of the text

  const extraSpaces = " ".repeat(screenWidth);
  text = extraSpaces + text + extraSpaces;
  const textsForScroll = [];
  let index = 0;

  while (index < text.length - screenWidth + 1) {
    textsForScroll.push(text.slice(index, index + screenWidth));
    index++;
  }
  return textsForScroll;
};
