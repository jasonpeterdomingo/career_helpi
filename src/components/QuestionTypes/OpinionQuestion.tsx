import { Button, Form } from "react-bootstrap";
import "./Questions.css";
import "./../cssStyling/Buttons.css";

/**
 * OpinionQuestion Component
 *
 * This component renders an opinion-based question where users can select
 * one option from a list of Bootstrap buttons. Also have a clear answer button option.
 *
 * Props:
 * - `name` (string): The question title.
 * - `body` (string): The question instructions.
 * - `options` (string[]): An array of opinion choices (strongly agree, agree, neutral, etc).
 * - `fontSize` (number): Font size.
 * - `onChange` ((value: string) => void): Callback function to capture user responses.
 * - `answer` (string): The currently selected answer passed from the parent component.
 *
 * Notes:
 * - This component is fully controlled; it relies on the parent to manage the selected answer via props.
 * - No internal state is used to store the answer
 *
 */

export function OpinionQuestion({
  name,
  body,
  options,
  fontSize,
  onChange,
  answer,
}: {
  name: string;
  body: string;
  options: string[];
  fontSize: number;
  onChange: (value: string) => void;
  answer: string;
}): React.JSX.Element {
  // Update answer for the selected option pair
  function updateAnswers(localAnswer: string) {
    onChange(localAnswer);
  }

  function clearAnswers() {
    onChange("");
  }

  return (
    <div className="text" style={{ fontSize: `${fontSize}px` }}>
      <h3 style={{ fontSize: `${fontSize + 4}px` }}>{name}</h3>
      <div className="question">
        <Form.Group>
          <Form.Label style={{ fontSize: `${fontSize}px` }}>{body}</Form.Label>
          <div className="opinion-question">
            {options.map((option, index) => (
              <Button
                key={index}
                variant="custom"
                className={
                  'opinion-button ${answer === option ? "selected" : ""}'
                }
                style={{ fontSize: `${fontSize}px` }}
                onClick={() => updateAnswers(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </Form.Group>
      </div>

      {/*For testing if answers are correctly updated.*/}
      <div>Answer: {answer} </div>
      <Button className="clear-button" variant="custom" onClick={clearAnswers}>
        Clear
      </Button>
    </div>
  );
}
