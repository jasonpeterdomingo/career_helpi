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
 * - `fontSize` (number): Font size.
 *
 * State:
 * - `answer` (string): Stores the selected answer.
 *
 */
export function MultipleChoiceQuestion({
  name,
  body,
  options,
  fontSize,
}: {
  name: string;
  body: string;
  options: string[];
  fontSize: number;
}): React.JSX.Element {
  const [answer, setAnswer] = useState<string>("");

  function updateAnswers(e: React.ChangeEvent<HTMLInputElement>) {
    setAnswer(e.target.value);
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
