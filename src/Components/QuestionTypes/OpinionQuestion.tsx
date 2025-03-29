import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

/**
 * OpinionQuestion Component
 *
 * This component renders an opinion-based question where users can select
 * one option from a list of Bootstrap buttons.
 *
 * Props:
 * - `name` (string): The question title.
 * - `body` (string): The question instructions.
 * - `options` (string[]): An array of opinion choices (strongly agree, agree, neutral, etc).
 * - `fontSize` (number): Font size.
 *
 * State:
 * - `answer` (string): Stores the selected answer.
 *
 */

export function OpinionQuestion({
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

  // Update answer for the selected option pair
  function updateAnswers(answer: string) {
    setAnswer(answer);
  }

  return (
    <div style={{ fontSize: `${fontSize}px` }}>
      <h3 style={{ fontSize: `${fontSize + 4}px` }}>{name}</h3>
      <Form.Group>
        <Form.Label style={{ fontSize: `${fontSize - 2}px` }}>
          {body}
        </Form.Label>
        {options.map((option, index) => (
          <Button
            key={index}
            variant={answer === option ? "primary" : "outline-primary"}
            style={{ fontSize: `${fontSize}px` }}
            onClick={() => updateAnswers(option)}
          >
            {option}
          </Button>
        ))}
      </Form.Group>

      {/*For testing if answers are correctly updated.*/}
      <div>Answer: {answer} </div>
    </div>
  );
}
