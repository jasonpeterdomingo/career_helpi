import { Button, Form } from "react-bootstrap";
import "./Questions.css";

/**
 * BinaryQuestion Component
 *
 * This component renders a binary-choice question with options displayed
 * as Bootstrap buttons. When a user clicks a button, it stores that specific answer
 * for each pair. Each option is presented as a pair of choices like a would you rather
 * style question. Also have a clear answer button option.
 *
 * Props:
 * - `name` (string): The question title.
 * - `body` (string): The question instructions.
 * - `options` (string[][]): An array of pairs of answer choices for binary questions.
 * - `fontSize` (number): Font size.
 * - `onChange` ((value: string[]) => void): Callback function to capture user responses.
 * - `answers` (string[]): The currently selected answers passed from the parent component.
 *
 * Notes:
 * - This component is fully controlled; it relies on the parent to manage the selected answer via props.
 * - No internal state is used to store the answer
 *
 */
export function BinaryQuestion({
  name,
  body,
  options,
  fontSize,
  onChange,
  answers = [],
}: {
  name: string;
  body: string;
  options: string[][];
  fontSize: number;
  onChange: (value: string[]) => void;
  answers: string[];
}): React.JSX.Element {
  // Update answer for the selected option pair
  function updateAnswers(index: number, selected: string) {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = selected;
    onChange(updatedAnswers);
  }

  function clearAnswers() {
    onChange(new Array(options.length).fill(""));
  }

  return (
    <div className="text" style={{ fontSize: `${fontSize}px` }}>
      <h3 style={{ fontSize: `${fontSize + 4}px` }}>{name}</h3>
      <Form.Group>
        <Form.Label style={{ fontSize: `${fontSize - 2}px` }}>
          {body}
        </Form.Label>
        {options.map((optionPair, index) => (
          <div className="binary-question" key={index}>
            {/* Render two buttons for each pair of options */}
            <Button
              variant={
                answers[index] === optionPair[0] ? "primary" : "outline-primary"
              }
              style={{ fontSize: `${fontSize}px` }}
              onClick={() => updateAnswers(index, optionPair[0])}
            >
              {optionPair[0]}
            </Button>
            <Button
              variant={
                answers[index] === optionPair[1] ? "primary" : "outline-primary"
              }
              style={{ fontSize: `${fontSize}px` }}
              onClick={() => updateAnswers(index, optionPair[1])}
            >
              {optionPair[1]}
            </Button>
          </div>
        ))}
      </Form.Group>

      {/*For testing if answers are correctly updated.*/}
      <div>Answer: {answers.join(", ")}</div>
      <Button onClick={clearAnswers}>Clear</Button>
    </div>
  );
}
