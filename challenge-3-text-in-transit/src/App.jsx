import { useMemo, useState } from "react";
import "./App.css";
import TextInput from "./components/TextInput";
import Screen from "./components/Screen";
import { scroll } from "./utils/scroll";

function App() {
  const [currentScrollingText, setCurrentScrollingText] =
    useState("AND Digital");
  const [screenWidth, setScreenWidth] = useState(10);
  const [speed, setSpeed] = useState(4);
  const textCharsForScreen = useMemo(
    () => scroll(currentScrollingText, screenWidth),
    [currentScrollingText, screenWidth]
  );

  return (
    <div className="App">
      <h1>Text in Transit</h1>
      <TextInput
        setCurrentScrollingText={setCurrentScrollingText}
        setScreenWidth={setScreenWidth}
        setSpeed={setSpeed}
      />
      <Screen
        currentScrollingText={currentScrollingText}
        textCharsForScreen={textCharsForScreen}
        screenWidth={screenWidth}
        speed={speed}
      />
    </div>
  );
}

export default App;
