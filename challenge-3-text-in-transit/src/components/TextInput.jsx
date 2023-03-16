import React, { useState } from "react";

export default function TextInput({ setCurrentScrollingText, setScreenWidth }) {
  const [currentTextInput, setCurrentTextInput] = useState("AND Digital");
  const [currentScreenWidth, setCurrentScreenWidth] = useState(10);
  console.log({ currentTextInput });
  const handleScrollClick = (e) => {
    e.preventDefault();
    setCurrentScrollingText(currentTextInput);
    setScreenWidth(currentScreenWidth);
  };
  return (
    <form>
      <label htmlFor="text">Enter Your Text:</label>
      <input
        id="text"
        type="text"
        placeholder="Enter your text here"
        value={currentTextInput}
        onChange={(e) => setCurrentTextInput(e.target.value)}
      />
      <label htmlFor="screenWidth">Enter Screen Width:</label>
      <input
        id="screenWidth"
        type="number"
        value={currentScreenWidth}
        onChange={(e) => {
          console.log(typeof e.target.value);
          setCurrentScreenWidth(+e.target.value);
        }}
      />
      <button onClick={handleScrollClick}>Scroll</button>
    </form>
  );
}
