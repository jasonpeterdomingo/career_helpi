import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * BinaryQuestion Component
 *
 * This component renders a binary-choice question with options displayed
 * as Bootstrap buttons. When a user clicks a button, it stores that specific answer
 * for each pair. Each option is presented as a pair of choices like a would you rather
 * style question.
 *
 * Props:
 * - `name` (string): The question title.
 * - `body` (string): The question instructions.
 * - `options` (string[][]): An array of pairs of answer choices for binary questions.
 *
 * State:
 * - `answers` (string[]): Stores the selected answers for each pair.
 *
 */

export function BinaryQuestion({
  name,
  body,
  options,
}: {
  name: string;
  body: string;
  options: string[][];
}): React.JSX.Element {
  // Track selected answers for each option pair
  const [answers, setAnswers] = useState<string[]>(
    new Array(options.length).fill("")
  );

  // Update answer for the selected option pair
  function updateAnswers(index: number, answer: string) {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = answer;
    setAnswers(updatedAnswers);
  }

  return (
    <div>
      <h3>{name}</h3>
      <p>{body}</p>
      {options.map((optionPair, index) => (
        <div key={index}>
          {/* Render two buttons for each pair of options */}
          <Button
            variant={
              answers[index] === optionPair[0] ? "primary" : "outline-primary"
            }
            onClick={() => updateAnswers(index, optionPair[0])}
          >
            {optionPair[0]}
          </Button>
          <Button
            variant={
              answers[index] === optionPair[1] ? "primary" : "outline-primary"
            }
            onClick={() => updateAnswers(index, optionPair[1])}
          >
            {optionPair[1]}
          </Button>
        </div>
      ))}

      {/*For testing if answers are correctly updated.*/}
      <div>Answer: {answers.join(", ")}</div>
    </div>
  );
}
