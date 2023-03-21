export const scroll = (text, screenWidth = 4) => {
  //add empty space to the left and right of the text amount of screenWidth
  //start from the left side and get screenWidth number of characters
  //then move one character to the right and get screenWidth number of characters
  //do it until the end of the text

  const extraSpaces = " ".repeat(screenWidth);
  text = extraSpaces + text + extraSpaces;
  const textsForScroll = [];
  let index = 0;

  const styles = {
    boldStartIndex: -1,
    boldEndIndex: -1,
    underlineStartIndex: -1,
    underlineEndIndex: -1,
    color: {
      startIndex: -1,
      endIndex: -1,
      color: "",
    },
  };

  //get the index of the start and end of the style tags
  if (text.includes("[B]")) {
    const boldStyleIndexes = findStyleTags(text, "B");
    styles.boldStartIndex = boldStyleIndexes[0];
    styles.boldEndIndex = boldStyleIndexes[1];
  }

  if (text.includes("[U]")) {
    const underlineStyleIndexes = findStyleTags(text, "U");
    styles.underlineStartIndex = underlineStyleIndexes[0];
    styles.underlineEndIndex = underlineStyleIndexes[1];
  }
  if (text.includes("[C:")) {
    styles.color.startIndex = text.indexOf("[C:");
    const colorCode = text.slice(
      styles.color.startIndex,
      styles.color.startIndex + 11
    );
    styles.color.color = colorCode.slice(3, 10);
    styles.color.endIndex = text.indexOf("[/C]") + 3;
  }

  //create an array of objects with the letter, bold, underline, and color properties
  text.split("").forEach((letter, index) => {
    const newLetter = {
      letter: letter,
      bold: false,
      underline: false,
      color: "",
    };
    if (index >= styles.boldStartIndex && index <= styles.boldEndIndex) {
      if (index < styles.boldStartIndex + 3 || index > styles.boldEndIndex - 4)
        //skip the style tags
        return;
      newLetter.bold = true;
    }
    if (
      index >= styles.underlineStartIndex &&
      index <= styles.underlineEndIndex
    ) {
      if (
        index < styles.underlineStartIndex + 3 ||
        index > styles.underlineEndIndex - 4
      )
        //skip the style tags
        return;
      newLetter.underline = true;
    }
    if (index >= styles.color.startIndex && index <= styles.color.endIndex) {
      if (
        index < styles.color.startIndex + 11 ||
        index > styles.color.endIndex - 4
      )
        //skip the style tags
        return;
      newLetter.color = styles.color.color;
    }

    textsForScroll.push(newLetter);
  });

  const result = [];
  while (index < textsForScroll.length - screenWidth + 1) {
    result.push(textsForScroll.slice(index, index + screenWidth));
    index++;
  }

  return result;
};

function findStyleTags(text, style) {
  const styleStartIndex = text.indexOf(`[${style}]`);
  const styleEndIndex = text.indexOf(`[/${style}]`) + 3;
  return [styleStartIndex, styleEndIndex];
}
