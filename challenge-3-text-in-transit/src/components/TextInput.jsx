import React, { useState } from "react";
import "./TextInput.style.css";
export default function TextInput({
  setCurrentScrollingText,
  setScreenWidth,
  setSpeed,
}) {
  const [currentTextInput, setCurrentTextInput] = useState(
    "Welcome on board this service to [B]London[/B]. Please have [U]all[/U] tickets and passes ready for inspection. This service is expected to depart [C:#00FF00]on time[/C]"
  );
  const [currentScreenWidth, setCurrentScreenWidth] = useState(20);
  const [currentSpeed, setCurrentSpeed] = useState(1);

  const handleScrollClick = (e) => {
    e.preventDefault();
    setCurrentScrollingText(currentTextInput);
    setScreenWidth(currentScreenWidth);
    setSpeed(currentSpeed);
  };
  return (
    <form>
      <div className="form-section text-input">
        <label htmlFor="text">Enter Your Text:</label>
        <textarea
          id="text"
          type="text"
          rows={5}
          cols={30}
          placeholder="Enter your text here"
          value={currentTextInput}
          onChange={(e) => setCurrentTextInput(e.target.value)}
        />
      </div>
      <div className="form-section">
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
      </div>
      <div className="form-section">
        <label htmlFor="speed">Enter Text Speed:</label>
        <input
          id="speed"
          type="number"
          min={1}
          value={currentSpeed}
          onChange={(e) => {
            setCurrentSpeed(+e.target.value);
          }}
        />
      </div>
      <button onClick={handleScrollClick}>Scroll</button>
    </form>
  );
}
