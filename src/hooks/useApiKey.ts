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