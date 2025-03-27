import React, { useState } from "react";
import { Form } from "react-bootstrap";

/**
 * MultipleChoiceQuestion Component
 *
 * This component renders a multiple-choice question where users can select
 * one option from a list of radio buttons.
 *
 * Props:
 * - `name` (string): The question title.
 * - `body` (string): The question instructions.
 * - `options` (string[]): An array of possible answer choices.
 *
 * State:
 * - `answer` (string): Stores the selected answer.
 *
 */
export function MultipleChoiceQuestion({
  name,
  body,
  options,
}: {
  name: string;
  body: string;
  options: string[];
}): React.JSX.Element {
  const [answer, setAnswer] = useState<string>("");

  function updateAnswers(e: React.ChangeEvent<HTMLInputElement>) {
    setAnswer(e.target.value);
  }

  return (
    <div>
      <h3>{name}</h3>
      <Form.Group>
        <Form.Label>{body}</Form.Label>
        {options.map((option: string, index: number) => (
          <Form.Check
            key={index}
            type="radio"
            name={name}
            label={option}
            value={option}
            checked={answer === option}
            onChange={(e) => updateAnswers(e)} // Update state when selection changes
          />
        ))}
      </Form.Group>

      <div> Answer: {answer}</div>
    </div>
  );
}
