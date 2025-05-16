import { Button, ButtonGroup, Form, ToggleButton } from "react-bootstrap";
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
      <h3 style={{ fontWeight: "bold", fontSize: `${fontSize + 6}px` }}>
        {name}
      </h3>
      <div className="question">
        <Form.Group>
          <Form.Label
            className="question-prompt"
            style={{ fontSize: `${fontSize}px` }}
          >
            {body}
          </Form.Label>
          <ButtonGroup vertical className="w-100">
            {options.map((option: string, index: number) => (
              <ToggleButton
                className="mult-choice-item custom-toggle"
                key={index}
                id={`radio-${index}`}
                type="radio"
                variant="custom"
                name={name}
                value={option}
                checked={answer === option}
                onChange={updateAnswer} // Update state when selection changes
                style={{ textAlign: "left", fontSize: `${fontSize - 2}px` }}
              >
                {option}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Form.Group>
      </div>
      <Button className="clear-button" variant="custom" onClick={clearAnswer}>
        Clear
      </Button>
    </div>
  );
}
