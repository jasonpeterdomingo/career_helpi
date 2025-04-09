import { Form } from "react-bootstrap";
import "../App.css";

interface FooterProps {
  apiKey: string;
  onKeyChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Footer({
  apiKey,
  onKeyChange,
}: FooterProps): React.JSX.Element {
  return (
    <footer className="App-footer">
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control
          type="password"
          placeholder={apiKey ? "" : "Insert API Key Here"}
          onChange={onKeyChange}
        ></Form.Control>
      </Form>
      <p>Names: Winnie Li, Jason Domingo, Ember Kerstetter</p>
    </footer>
  );
}
