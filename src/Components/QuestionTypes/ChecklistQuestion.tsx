import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

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
}: {
  name: string;
  body: string;
  options: string[];
  limit: number | null;
  fontSize: number;
}): React.JSX.Element {
  const [answers, setAnswers] = useState<string[]>([]);

  function updateAnswers(e: React.ChangeEvent<HTMLInputElement>) {
    const answer = e.target.value;
    // Check if the answer is already present
    if (answers.includes(answer)) {
      // Remove the given answer
      setAnswers(answers.filter((e) => e !== answer));
    } else if (limit !== null && limit >= answers.length + 1) {
      // Append answer if the limit is not met yet
      setAnswers([...answers, answer]);
    } else if (limit === null) {
      setAnswers([...answers, answer]); // If there is not a limit, append answer
    }
  }

  function clearAnswers() {
    setAnswers([]);
  }

  return (
    <div style={{ fontSize: `${fontSize}px` }}>
      <h3 style={{ fontSize: `${fontSize + 4}px` }}>{name}</h3>
      <Form.Group>
        <Form.Label style={{ fontSize: `${fontSize - 2}px` }}>
          {body}
        </Form.Label>
        {options.map((option: string, index: number) => (
          <Form.Check
            key={index}
            type="checkbox"
            name={name}
            label={option}
            value={option}
            checked={answers.includes(option)}
            onChange={(e) => updateAnswers(e)}
          />
        ))}
      </Form.Group>

      <div> Answers: {answers.join(", ")}</div>
      <Button onClick={clearAnswers}>Clear</Button>
    </div>
  );
}
