import React, { useEffect, useMemo, useState } from "react";
import "./Screen.style.css";

export default function Screen({ textCharsForScreen, screenWidth = 10 }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  //   console.log({ textCharsForScreen });
  useEffect(() => {
    // update the text on the screen every 500ms
    const interval = setTimeout(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === textCharsForScreen.length ? 0 : prevIndex + 1
      );
    }, 500);
    return () => clearInterval(interval);
  }, [textCharsForScreen, currentTextIndex]);

  const screenBoxes = useMemo(
    () =>
      Array.from({ length: screenWidth }, (_, i) => (
        //   textCharsForScreen[currentTextIndex]?.split("").map((char, i) => (
        <div key={i} className="screen-box">
          {textCharsForScreen[currentTextIndex]?.charAt(i)}
          {/* {char} */}
        </div>
      )),
    [textCharsForScreen, currentTextIndex, screenWidth]
  );
  return (
    <section
      className="scroll-screen"
      style={{ gridTemplateColumns: `repeat(${screenWidth},1fr)` }}
    >
      {/* {textCharsForScreen[currentTextIndex]}
       */}
      {screenBoxes}
    </section>
  );
}
