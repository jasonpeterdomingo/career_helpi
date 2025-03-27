import React, { useState } from "react";
import { Form } from "react-bootstrap";

/**
 * ChecklistQuestion Component
 *
 * This component renders a checklist question where users can select
 * multiple options from a list of checkboxes.
 *
 * Props:
 * - `name` (string): The question title.
 * - `body` (string): The question instructions.
 * - `options` (string[]): An array of possible answer choices.
 *
 * State:
 * - `answers` (string[]): Stores the selected answers.
 *
 */
export function ChecklistQuestion({
  name,
  body,
  options,
}: {
  name: string;
  body: string;
  options: string[];
}): React.JSX.Element {
  const [answers, setAnswers] = useState<string[]>([]);

  function updateAnswers(e: React.ChangeEvent<HTMLInputElement>) {
    const answer = e.target.value;
    // Check if the answer is already present
    if (answers.includes(answer)) {
      // Remove the given answer
      setAnswers(answers.filter((e) => e !== answer));
    } else {
      // Append the given answer
      setAnswers([...answers, answer]);
    }
  }

  return (
    <div>
      <h3>{name}</h3>
      <Form.Group>
        <Form.Label>{body}</Form.Label>
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
    </div>
  );
}
