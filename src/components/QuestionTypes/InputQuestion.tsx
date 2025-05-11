import { Form, Button } from "react-bootstrap";
import "./Questions.css";
import "./../cssStyling/Buttons.css";

/**
 * InputQuestion Component
 *
 * This component renders a short-answer input question where users can type a response.
 * Also have a clear answer button option.
 *
 * Props:
 * - `name` (string): The question title.
 * - `body` (string): The question instructions.
 * - `fontSize` (number): Font size.
 * - `onChange` ((value: string) => void): Callback function to capture user response.
 * - `answer` (string): The currently entered answer passed from the parent component.
 *
 * Notes:
 * - This component is fully controlled; it relies on the parent to manage the selected answer via props.
 * - No internal state is used to store the answer
 */
export function InputQuestion({
  name,
  body,
  fontSize,
  onChange,
  answer = "",
}: {
  name: string;
  body: string;
  fontSize: number;
  onChange: (value: string) => void;
  answer: string;
}): React.JSX.Element {
  function updateAnswer(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  function clearAnswer() {
    onChange("");
  }

  return (
    <div className="text" style={{ fontSize: `${fontSize}px` }}>
      <h3 style={{ fontWeight: "bold", fontSize: `${fontSize + 6}px` }}>
        {name}
      </h3>
      <div className="question">
        <Form.Group>
          <Form.Label
            className="question-prompt"
            style={{ fontSize: `${fontSize - 2}px` }}
          >
            {body}
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={answer}
            onChange={updateAnswer}
            style={{ fontSize: `${fontSize - 2}px` }}
          />
        </Form.Group>
      </div>
      {/*<div> Answer: {answer}</div>*/}
      <Button className="clear-button" variant="custom" onClick={clearAnswer}>
        Clear
      </Button>
    </div>
  );
}
