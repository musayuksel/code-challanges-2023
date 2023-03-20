import React, { useEffect, useMemo, useState } from "react";
import "./Screen.style.css";

export default function Screen({
  textCharsForScreen,
  screenWidth = 10,
  speed = 1,
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  useEffect(() => {
    // update the text on the screen every 500ms
    const interval = setTimeout(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === textCharsForScreen.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000 / speed);
    return () => clearInterval(interval);
  }, [textCharsForScreen, currentTextIndex, speed]);

  //   const screenBoxes = useMemo(
  //     () =>
  //       Array.from({ length: screenWidth }, (_, i) => (
  //         //   textCharsForScreen[currentTextIndex]?.split("").map((char, i) => (
  //         <div
  //           key={i}
  //           className="screen-box"
  //           style={{ textDecoration: `underline` }}
  //         >
  //           {textCharsForScreen[currentTextIndex]?.[i]}
  //           {/* {char} */}
  //         </div>
  //       )),
  //     [textCharsForScreen, currentTextIndex, screenWidth]
  //   );
  const currentText = textCharsForScreen[currentTextIndex];
  const screenBoxes = currentText?.map((letter, index) => (
    <div
      key={index}
      className="screen-box"
      style={{
        textDecoration: `${letter.underline ? "underline" : ""}`,
        fontWeight: `${letter.bold ? "bold" : ""}`,
      }}
    >
      {letter.letter}
    </div>
  ));

  console.log({ screenBoxes });
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
