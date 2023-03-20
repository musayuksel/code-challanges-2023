export const scroll = (text, screenWidth = 4) => {
  //add empty space to the left and right of the text amount of screenWidth
  //start from the left side and get screenWidth number of characters
  //then move one character to the right and get screenWidth number of characters
  //do it until the end of the text

  const extraSpaces = " ".repeat(screenWidth);
  text = extraSpaces + text + extraSpaces;
  const textsForScroll = [
    // {
    //   letter: "x",
    //   bold: false,
    //   underline: false,
    //   color: "red",
    // },
    // {
    //   letter: "y",
    //   bold: false,
    //   underline: false,
    //   color: "red",
    // },
  ];
  let index = 0;

  const styles = {
    boldStartIndexes: [],
    boldEndIndexes: [],
    underlineStartIndexes: [],
    underlineEndIndexes: [],
    colorStartIndexes: [],
    colorEndIndexes: [],
  };
  // "Welcome on board this service to [B]London[/B]. Please have [U]all[/U] tickets and passes ready for inspection. This service is expected to depart [C:#00FF00]on time[/C]"
  //find all B indexes and add them to an array
  //find all U indexes and add them to an array
  //find all C indexes and add them to an array
  //find all /B indexes and add them to an array
  //find all /U indexes and add them to an array
  //find all /C indexes and add them to an array
  //and replace them with empty spaces
  while (text.includes("[B]")) {
    const index = text.indexOf("[B]");
    styles.boldStartIndexes.push(index);
    text = text.replace("[B]", "");
    const index2 = text.indexOf("[/B]");
    styles.boldEndIndexes.push(index2 - 1);
    text = text.replace("[/B]", "");
  }
  while (text.includes("[U]")) {
    const index = text.indexOf("[U]");
    styles.underlineStartIndexes.push(index);
    text = text.replace("[U]", "");
    const index2 = text.indexOf("[/U]");
    styles.underlineEndIndexes.push(index2 - 1);
    text = text.replace("[/U]", "");
  }

  console.log({ styles });
  text.split("").forEach((letter, index) => {
    const newLetter = {
      letter: letter,
      bold: false,
      underline: false,
      color: "",
    };
    if (
      index >= styles.boldStartIndexes[0] &&
      index <= styles.boldEndIndexes[0]
    ) {
      newLetter.bold = true;
    }
    if (
      index >= styles.underlineStartIndexes[0] &&
      index <= styles.underlineEndIndexes[0]
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
// export const scroll = (text, screenWidth = 4) => {
//   //add empty space to the left and right of the text amount of screenWidth
//   //start from the left side and get screenWidth number of characters
//   //then move one character to the right and get screenWidth number of characters
//   //do it until the end of the text

//   const extraSpaces = " ".repeat(screenWidth);
//   text = extraSpaces + text + extraSpaces;
//   const textsForScroll = [];
//   let index = 0;

//   while (index < text.length - screenWidth + 1) {
//     textsForScroll.push(text.slice(index, index + screenWidth));
//     index++;
//   }
//   console.log({ textsForScroll });
//   return textsForScroll;
// };
