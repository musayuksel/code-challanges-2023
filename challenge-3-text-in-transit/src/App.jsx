import { useMemo, useState } from "react";
import "./App.css";
import TextInput from "./components/TextInput";
import Screen from "./components/Screen";
import { scroll } from "./utils/scroll";

function App() {
  const [currentScrollingText, setCurrentScrollingText] = useState(
    "Welcome on board this service to [B]London[/B]. Please have [U]all[/U] tickets and passes ready for inspection. This service is expected to depart [C:#00FF00]on time[/C]"
  );
  const [screenWidth, setScreenWidth] = useState(20);
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
