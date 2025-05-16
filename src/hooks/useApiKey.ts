import { useState } from "react";

const SAVE_KEY_NAME = "MYKEY";

/**
 * useAPiKey Hook
 * 
 * This hook handles the API key storage and retrieval from local storage.
 * It initializes the key state from local storage and updates local storage only when `saveKey()` is called
 */
export const useApiKey = () => {
  const [key, setKey] = useState(() => {
    const stored = localStorage.getItem(SAVE_KEY_NAME);
    return stored ? JSON.parse(stored) : "";
  });

  function saveKey() {
    localStorage.setItem(SAVE_KEY_NAME, JSON.stringify(key));
  }

  return { key, setKey, saveKey };
};
//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)

// let keyData = "";
// const saveKeyData = "MYKEY";
// const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
// if (prevKey !== null) {
//   keyData = JSON.parse(prevKey);
// }

//  //sets the local storage item to the api key the user inputed
//   function handleSubmit() {
//     localStorage.setItem(saveKeyData, JSON.stringify(key));
//     window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
//   }
//   //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
//   function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
//     setKey(event.target.value);
//   }