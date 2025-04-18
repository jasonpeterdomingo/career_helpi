import React, { useState } from "react";
import "./App.css";
import {
  NavigationBar,
  Footer,
  RenderPage,
  FontSizeAdjuster,
} from "./components";
import { PAGE } from "./types/page";
import { useApiKey } from "./hooks/useApiKey";

function App() {
  const { key, setKey } = useApiKey(); // for api key input
  const [fontSize, setFontSize] = useState<number>(16); // For adjusting font size
  const [currentPage, setPage] = useState<PAGE>("home"); // For rendering different pages

  return (
    <div className="App">
      <header>
        <NavigationBar setPage={setPage} />
      </header>
      <FontSizeAdjuster fontSize={fontSize} setFontSize={setFontSize} />
      <div className="content-wrapper">
        <RenderPage setPage={setPage} page={currentPage} fontSize={fontSize} />
      </div>
      <Footer
        apiKey={key}
        onKeyChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setKey(e.target.value)
        }
      ></Footer>
    </div>
  );
}

export default App;
