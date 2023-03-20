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
    colorStartIndexes: [],
    colorEndIndexes: [],
  };
  // "Welcome on board this service to [B]London[/B]. Please have [U]all[/U] tickets and passes ready for inspection. This service is expected to depart [C:#00FF00]on time[/C]"

  if (text.includes("[B]")) {
    styles.boldStartIndex = text.indexOf("[B]");
    text = text.replace("[B]", "");

    styles.boldEndIndex = text.indexOf("[/B]") - 1;
    text = text.replace("[/B]", "");
  }
  if (text.includes("[U]")) {
    styles.underlineStartIndex = text.indexOf("[U]");
    text = text.replace("[U]", "");

    styles.underlineEndIndex = text.indexOf("[/U]") - 1;
    text = text.replace("[/U]", "");
  }

  text.split("").forEach((letter, index) => {
    const newLetter = {
      letter: letter,
      bold: false,
      underline: false,
      color: "",
    };
    if (index >= styles.boldStartIndex && index <= styles.boldEndIndex) {
      newLetter.bold = true;
    }
    if (
      index >= styles.underlineStartIndex &&
      index <= styles.underlineEndIndex
    ) {
      newLetter.underline = true;
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
