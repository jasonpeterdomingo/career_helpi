import React, { useState } from "react";
import { Button } from "react-bootstrap";

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
 *
 * State:
 * - `answer` (string): Stores the selected answer.
 *
 */

export function OpinionQuestion({
  name,
  body,
  options,
}: {
  name: string;
  body: string;
  options: string[];
}): React.JSX.Element {
  const [answer, setAnswer] = useState<string>("");

  // Update answer for the selected option pair
  function updateAnswers(answer: string) {
    setAnswer(answer);
  }

  return (
    <div>
      <h3>{name}</h3>
      <p>{body}</p>
      {options.map((option, index) => (
        <Button
          key={index}
          variant={answer === option ? "primary" : "outline-primary"}
          onClick={() => updateAnswers(option)}
        >
          {option}
        </Button>
      ))}

      {/*For testing if answers are correctly updated.*/}
      <div>Answer: {answer} </div>
    </div>
  );
}
