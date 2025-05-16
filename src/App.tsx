import React, { useState } from "react";
import "./App.css";
import { NavigationBar, Footer, RenderPage } from "./components";
import { PAGE } from "./types/page";
import { useApiKey } from "./hooks/useApiKey";

/**
 * App Component
 */
function App() {
  const { key, setKey, saveKey } = useApiKey(); // for api key input
  const [validKey, setValidKey] = useState<boolean>(false); // for checking if the key is valid
  const [fontSize, setFontSize] = useState<number>(16); // For adjusting font size
  const [currentPage, setPage] = useState<PAGE>("home"); // For rendering different pages
  const [basicAnswers, setBasicAnswers] = useState<{
    [id: number]: string | string[];
  }>({}); // For storing answers to basic questions
  const [detailedAnswers, setDetailedAnswers] = useState<{
    [id: number]: string | string[];
  }>({}); // For storing answers to detailed questions
  const [showToast, setShowToast] = useState<boolean>(false); // For showing toast notifications
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
          detailedAnswers={detailedAnswers}
          setDetailedAnswers={setDetailedAnswers}
        />
      </div>
      <Footer
        apiKey={key}
        onKeyChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setKey(e.target.value)
        }
        onSubmit={(valid: boolean) => {
          setValidKey(valid);
          if (valid) {
            saveKey(); // only save the key on Submit
            setShowToast(true); // show toast notification
            setTimeout(() => {
              setShowToast(false); // hide toast notification after 1.5 seconds
              window.location.reload(); // reload the page to apply the new key
            }, 1500);
          }
        }}
        validKey={validKey} // Pass the validKey state to Footer
      ></Footer>
      {showToast && (
        <div className="toast-popup">
          <p>API Key saved! Reloading...</p>
        </div>
      )}
    </div>
  );
}

export default App;
