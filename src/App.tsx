import React, { useState } from "react";
import "./App.css";
import { NavigationBar, Footer, RenderPage } from "./components";
import { PAGE } from "./types/page";
import { useApiKey } from "./hooks/useApiKey";

/**
 * App Component
 */
function App() {
  const { key, setKey } = useApiKey(); // for api key input
  const [fontSize, setFontSize] = useState<number>(16); // For adjusting font size
  const [currentPage, setPage] = useState<PAGE>("home"); // For rendering different pages
  const [basicAnswers, setBasicAnswers] = useState<{
    [id: number]: string | string[];
  }>({}); // For storing answers to basic questions

  return (
    <div className="App">
      <header>
        <NavigationBar
          setPage={setPage}
          setFontSize={setFontSize}
          fontSize={fontSize}
        />
      </header>
      <div className="content-wrapper">
        <RenderPage
          setPage={setPage}
          page={currentPage}
          fontSize={fontSize}
          apiKey={key}
          basicAnswers={basicAnswers}
          setBasicAnswers={setBasicAnswers}
        />
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
