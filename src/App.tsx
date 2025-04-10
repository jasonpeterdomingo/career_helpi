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

// //local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)

// let keyData = "";
// const saveKeyData = "MYKEY";
// const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
// if (prevKey !== null) {
//   keyData = JSON.parse(prevKey);
// }

function App() {
  const { key, setKey } = useApiKey();
  // const [key, setKey] = useState<string>(keyData); //for api key input
  const [fontSize, setFontSize] = useState<number>(16); // For adjusting font size
  const [currentPage, setPage] = useState<PAGE>("home"); // For rendering different pages

  // //sets the local storage item to the api key the user inputed
  // function handleSubmit() {
  //   localStorage.setItem(saveKeyData, JSON.stringify(key));
  //   window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  // }
  // //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  // function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
  //   setKey(event.target.value);
  // }

  return (
    <div className="App">
      <header>
        <NavigationBar setPage={setPage} />
      </header>
      <hr />
      <FontSizeAdjuster setFontSize={setFontSize} />
      <hr />
      <RenderPage setPage={setPage} page={currentPage} fontSize={fontSize} />
      <Footer apiKey={key} onKeyChange={(e) => setKey(e.target.value)}></Footer>
    </div>
  );
}

export default App;
