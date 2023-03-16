import { useMemo, useState } from "react";
import "./App.css";
import TextInput from "./components/TextInput";
import Screen from "./components/Screen";
import { scroll } from "./utils/scroll";

function App() {
  const [currentScrollingText, setCurrentScrollingText] =
    useState("AND Digital");
  const [screenWidth, setScreenWidth] = useState(14);
  // const textForScreen = scroll(currentScrollingText, 10);

  const textCharsForScreen = useMemo(
    () => scroll(currentScrollingText, screenWidth),
    [currentScrollingText, screenWidth]
  );
  const handleScroolClick = () => {};
  return (
    <div className="App">
      <h1>Text in Transit</h1>
      <TextInput
        currentScrollingText={currentScrollingText}
        setCurrentScrollingText={setCurrentScrollingText}
      />
      <button onClick={handleScroolClick}>Scroll</button>
      <Screen
        currentScrollingText={currentScrollingText}
        textCharsForScreen={textCharsForScreen}
        screenWidth={screenWidth}
      />
    </div>
  );
}

export default App;
