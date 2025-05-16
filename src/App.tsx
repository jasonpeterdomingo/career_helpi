import React, { useState, useEffect } from "react";
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
  const [toast, setToast] = useState<boolean>(false); // For showing toast notifications
  const [warning, setWarning] = useState<boolean>(false); // For showing warning messages for disabled buttons

  // Check if the API key is valid after reloading the site
  useEffect(() => {
    if (key && /^sk-[A-Za-z0-9-_]+$/.test(key)) {
      setValidKey(true);
    }
  }, [key]);

  // Have warning message disappear after 1.5 seconds
  useEffect(() => {
    if (warning) {
      const timeout = setTimeout(() => setWarning(false), 1500);
      return () => clearTimeout(timeout);
    }
  });
  return (
    <div className="App">
      <header>
        <NavigationBar
          setPage={setPage}
          setFontSize={setFontSize}
          fontSize={fontSize}
          isValidKey={validKey}
          triggerWarning={() => setWarning(true)}
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
            setToast(true); // show toast notification
            setTimeout(() => {
              setToast(false); // hide toast notification after 1.5 seconds
              window.location.reload(); // reload the page to apply the new key
            }, 1500);
          }
        }}
        validKey={validKey} // Pass the validKey state to Footer
      ></Footer>
      {toast && (
        <div className="toast-popup">
          <p>API Key saved! Reloading...</p>
        </div>
      )}
      {warning && (
        <div className="toast-popup toast-error">
          Please enter a valid API key to access questions.
        </div>
      )}
    </div>
  );
}

export default App;
