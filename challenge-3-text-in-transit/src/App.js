import { useState } from "react";
import "./App.css";
import TextInput from "./components/TextInput";

function App() {
  const [currentText, setCurrentText] = useState("AND Digital");

  const handleScroolClick = () => {};
  return (
    <div className="App">
      <h1>Text in Transit</h1>
      <TextInput currentText={currentText} setCurrentText={setCurrentText} />
      <button onClick={handleScroolClick}>Scroll</button>
    </div>
  );
}

export default App;
