import React, { useState } from "react";
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
 *
 * State:
 * - `answers` (string[]): Stores the selected answers for each pair.
 *
 */
export function BinaryQuestion({
  name,
  body,
  options,
  fontSize,
}: {
  name: string;
  body: string;
  options: string[][];
  fontSize: number;
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

  function clearAnswers() {
    setAnswers([]);
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
