//import ./DetailedQ1.css
import { Form } from "react-bootstrap";
import { GenerateCareerReport } from "../api/openaiApi";

/**
 * BasicResultPageProps Interface
 * apiKey: string - The API key for OpenAI.
 */
interface BasicResultPageProps {
  apiKey: string;
}

/**
 * BasicResultPage Component
 *
 * This component displays a basic result page with a form.
 *
 * Props:
 * - `apiKey` (string): The API key for OpenAI.
 *
 * Returns:
 * - A JSX element representing the basic result page.
 */
export function BasicResultPage({
  apiKey,
}: BasicResultPageProps): React.JSX.Element {
  //pass in whatever state we want changes/to keep track of from app.tsx

  return (
    <div>
      <Form.Group controlId="basicResult">
        <Form.Label>This is the Basic Result Page!</Form.Label>
        <Form.Control />
      </Form.Group>
    </div>
  );
}
