import React from "react";

export default function TextInput({ currentText, setCurrentText }) {
  return (
    <section>
      <label htmlFor="text">Enter Your Text:</label>
      <input
        id="text"
        type="text"
        value={currentText}
        onChange={(e) => setCurrentText(e.target.value)}
      />
      <label htmlFor="screenWidth">Enter Screen Width:</label>
      <input id="screenWidth" type="number" />
    </section>
  );
}
