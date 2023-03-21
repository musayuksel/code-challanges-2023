import React, { useEffect, useMemo, useState } from "react";
import "./Screen.style.css";

export default function Screen({
  textCharsForScreen,
  screenWidth = 10,
  speed = 1,
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  useEffect(() => {
    // update the text on the screen every 1000ms as a default
    const interval = setTimeout(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === textCharsForScreen.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000 / speed);
    return () => clearInterval(interval);
  }, [textCharsForScreen, currentTextIndex, speed]);

  const currentText = textCharsForScreen[currentTextIndex];
  const screenBoxes = useMemo(
    () =>
      currentText?.map((letter, index) => (
        <div
          key={index}
          className="screen-box"
          style={{
            textDecoration: `${letter.underline ? "underline" : ""}`,
            fontWeight: `${letter.bold ? "bold" : ""}`,
            color: `${letter.color}`,
          }}
        >
          {letter.letter}
        </div>
      )),
    [currentText]
  );

  return (
    <section
      className="scroll-screen"
      style={{ gridTemplateColumns: `repeat(${screenWidth},1fr)` }}
    >
      {screenBoxes}
    </section>
  );
}
