import { scroll } from "./scroll";

describe("scroll function", () => {
  it("should return texts for scroll", () => {
    const text = "musa";
    const expectedTexts = [
      "    ",
      "   m",
      "  mu",
      " mus",
      "musa",
      "usa ",
      "sa  ",
      "a   ",
      "    ",
    ];

    const resultLetters = scroll(text, 4).map((text) =>
      text.map((letter) => letter.letter).join("")
    );

    expect(resultLetters).toEqual(expectedTexts);
  });

  it("should return texts for scroll for longer texts", () => {
    const text = "Good luck";
    const expectedTexts = [
      "          ",
      "         G",
      "        Go",
      "       Goo",
      "      Good",
      "     Good ",
      "    Good l",
      "   Good lu",
      "  Good luc",
      " Good luck",
      "Good luck ",
      "ood luck  ",
      "od luck   ",
      "d luck    ",
      " luck     ",
      "luck      ",
      "uck       ",
      "ck        ",
      "k         ",
      "          ",
    ];
    const resultLetters = scroll(text, 10).map((text) =>
      text.map((letter) => letter.letter).join("")
    );

    expect(resultLetters).toEqual(expectedTexts);
  });

  it("should handle scroll if the screen is very big", () => {
    const text = "Yes";
    const screenWidth = 10;
    const expectedTexts = [
      "          ",
      "         Y",
      "        Ye",
      "       Yes",
      "      Yes ",
      "     Yes  ",
      "    Yes   ",
      "   Yes    ",
      "  Yes     ",
      " Yes      ",
      "Yes       ",
      "es        ",
      "s         ",
      "          ",
    ];

    const resultLetters = scroll(text, screenWidth).map((text) =>
      text.map((letter) => letter.letter).join("")
    );
    expect(resultLetters).toEqual(expectedTexts);
  });

  it("should handle scroll if the screen is very small", () => {
    const text = "Looong";
    const screenWidth = 2;
    const expectedTexts = [
      "  ",
      " L",
      "Lo",
      "oo",
      "oo",
      "on",
      "ng",
      "g ",
      "  ",
    ];
    const resultLetters = scroll(text, screenWidth).map((text) =>
      text.map((letter) => letter.letter).join("")
    );
    expect(resultLetters).toEqual(expectedTexts);
  });
});
