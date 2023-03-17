import React, { useState } from "react";

export default function TextInput({
  setCurrentScrollingText,
  setScreenWidth,
  setSpeed,
}) {
  const [currentTextInput, setCurrentTextInput] = useState("AND Digital");
  const [currentScreenWidth, setCurrentScreenWidth] = useState(10);
  const [currentSpeed, setCurrentSpeed] = useState(1);

  const handleScrollClick = (e) => {
    e.preventDefault();
    setCurrentScrollingText(currentTextInput);
    setScreenWidth(currentScreenWidth);
    setSpeed(currentSpeed);
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
        min={1}
        value={currentScreenWidth}
        onChange={(e) => {
          setCurrentScreenWidth(+e.target.value);
        }}
      />
      <input
        id="speed"
        type="number"
        min={1}
        value={currentSpeed}
        onChange={(e) => {
          setCurrentSpeed(+e.target.value);
        }}
      />
      <button onClick={handleScrollClick}>Scroll</button>
    </form>
  );
}
