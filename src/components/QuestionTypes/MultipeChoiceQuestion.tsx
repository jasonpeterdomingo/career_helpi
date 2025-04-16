import { Button, Form } from "react-bootstrap";
import "./Questions.css";
import "./../cssStyling/Buttons.css";

/**
 * MultipleChoiceQuestion Component
 *
 * This component renders a multiple-choice question where users can select
 * one option from a list of radio buttons. Also have a clear answer button option.
 *
 * Props:
 * - `name` (string): The question title.
 * - `body` (string): The question instructions.
 * - `options` (string[]): An array of possible answer choices.
 * - `fontSize` (number): Font size.
 * - `onChange` ((value: string) => void): Callback function to capture user responses.
 * - `answer` (string): The currently selected answer passed from the parent component.
 *
 * Notes:
 * - This component is fully controlled; it relies on the parent to manage the selected answer via props.
 * - No internal state is used to store the answer
 *
 */
export function MultipleChoiceQuestion({
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
  function updateAnswer(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value); // Notifying the parent
  }

  function clearAnswer() {
    onChange("");
  }

  return (
    <div className="text" style={{ fontSize: `${fontSize}px` }}>
      <h3 style={{ fontSize: `${fontSize + 4}px` }}>{name}</h3>
      <div className="question">
        <Form.Group>
          <Form.Label
            className="question-prompt"
            style={{ fontSize: `${fontSize - 2}px` }}
          >
            {body}
          </Form.Label>
          {options.map((option: string, index: number) => (
            <div key={index} className="mult-choice-item">
              <Form.Check
                type="radio"
                name={name}
                label={option}
                value={option}
                checked={answer === option}
                onChange={updateAnswer} // Update state when selection changes
              />
            </div>
          ))}
        </Form.Group>
      </div>
      <div> Answer: {answer}</div>
      <Button className="clear-button" variant="custom" onClick={clearAnswer}>
        Clear
      </Button>
    </div>
  );
}
