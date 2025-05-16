import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../App.css";

interface FooterProps {
  apiKey: string;
  onKeyChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (valid: boolean) => void;
  validKey: boolean;
}

/**
 * Footer Component
 *
 * The footer of the webpage which consisted of an input box for entering API key
 * and names of team members.
 *
 * Props:
 * - `apiKey` (string): The API key for OpenAI.
 * - `onKeyChange` (function): A function that updates API key whenever the input changes.
 *
 */
export function Footer({
  apiKey,
  onKeyChange,
  onSubmit,
  validKey,
}: FooterProps): React.JSX.Element {
  const [error, setError] = useState<boolean>(false);

  function isValidKey(key: string): boolean {
    // Check if the key is a valid OpenAI API key format
    const regex = /^sk-[A-Za-z0-9-_]+$/; // used ChatGPT to generate this regex
    // The regex checks if the key starts with "sk-" followed by 20 to 100 alphanumeric characters
    return regex.test(key);
  }

  function handleSubmit() {
    const isValid = isValidKey(apiKey);
    setError(!isValid); // show error if the key is invalid
    onSubmit(isValid);
  }

  return (
    <footer className="App-footer">
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control
          type="password"
          placeholder={apiKey ? "" : "Insert API Key Here"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onKeyChange(e); // Call the function passed from App.tsx to update the API key
            setError(false); // Reset error state when user types
          }}
          value={apiKey}
        />
        <Button onClick={handleSubmit}>Submit</Button>
        {error && (
          <div style={{ color: "red", marginTop: "0.5rem" }}>
            Please enter a valid OpenAI API key
          </div>
        )}
      </Form>
      <p>Names: Winnie Li, Jason Domingo, Ember Kerstetter</p>
    </footer>
  );
}
