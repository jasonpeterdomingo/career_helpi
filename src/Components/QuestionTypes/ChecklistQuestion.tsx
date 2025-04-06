import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Questions.css";

/**
 * ChecklistQuestion Component
 *
 * This component renders a checklist question where users can select
 * multiple options from a list of checkboxes. Also have a clear answer button option.
 *
 * Props:
 * - `name` (string): The question title.
 * - `body` (string): The question instructions.
 * - `options` (string[]): An array of possible answer choices.
 * - `limit` (number | null): A limit to how many answer choices can be selected. If null,
 * then user can select any amount of answer choices.
 * - `fontSize` (number): Font size.
 * - `onChange` ((value: string[]) => void): Callback function to capture user responses.
 *
 * State:
 * - `answers` (string[]): Stores the selected answers.
 *
 */
export function ChecklistQuestion({
  name,
  body,
  options,
  limit,
  fontSize,
  onChange,
}: {
  name: string;
  body: string;
  options: string[];
  limit: number | null;
  fontSize: number;
  onChange: (value: string[]) => void;
}): React.JSX.Element {
  const [answers, setAnswers] = useState<string[]>([]);

  function updateAnswers(e: React.ChangeEvent<HTMLInputElement>) {
    const answer = e.target.value;
    // Check if the answer is already present
    if (answers.includes(answer)) {
      // Remove the given answer
      setAnswers(answers.filter((e) => e !== answer));
      onChange(answers.filter((e) => e !== answer));
    } else if (limit !== null && limit >= answers.length + 1) {
      // Append answer if the limit is not met yet
      setAnswers([...answers, answer]);
      onChange([...answers, answer]);
    } else if (limit === null) {
      setAnswers([...answers, answer]); // If there is not a limit, append answer
      onChange([...answers, answer]);
    }
  }

  function clearAnswers() {
    setAnswers([]);
    onChange([]);
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
          <div className="checklist-question">
            {options.map((option: string, index: number) => (
              <div key={option} className="checklist-item">
                <Form.Check
                  key={index}
                  type="checkbox"
                  name={name}
                  label={option}
                  value={option}
                  checked={answers.includes(option)}
                  onChange={(e) => updateAnswers(e)}
                />
              </div>
            ))}
          </div>
        </Form.Group>
      </div>
      <div> Answers: {answers.join(", ")}</div>
      <Button onClick={clearAnswers}>Clear</Button>
    </div>
  );
}
