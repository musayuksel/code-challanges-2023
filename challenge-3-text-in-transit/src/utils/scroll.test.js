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

    expect(scroll(text, 4)).toEqual(expectedTexts);
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

    expect(scroll(text, 10)).toEqual(expectedTexts);
  });

  it("should handle scroll if the screen is very big ", () => {
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

    expect(scroll(text, screenWidth)).toEqual(expectedTexts);
  });
});
