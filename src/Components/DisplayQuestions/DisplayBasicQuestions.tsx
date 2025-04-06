//import ./DetailedQ1.css

import { Form } from "react-bootstrap";
import React, { useState } from "react";
import { BASIC_QUESTIONS } from "../../data/questions";
import { createQuestion } from "../../Helpers/displayQuestionHelpers";
import { Button } from "react-bootstrap";

/**
 * DisplayBasicQuestions Component
 *
 * This component renders questions where users can navigate through one question at a time.
 * The user can move to the next question by clicking a "Next" button.
 *
 * Props:
 * - `fontSize` (number): Font size.
 * - `BASIC_QUESTIONS` (Question[]): An array of question objects.
 *
 * State:
 * - `index` (number): Tracks the index of the currently displayed question.
 *
 */
export function DisplayBasicQuestions({
  fontSize,
}: {
  fontSize: number;
}): React.JSX.Element {
  const [index, setIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [id: number]: string | string[] }>(
    {}
  );
  const currentQuestion = BASIC_QUESTIONS[index];

  const isAnswered = Boolean(answers[currentQuestion.id]);

  /* This functionality of storing user answer for given question ID is ChatGPT-generated code. */
  function updateAnswers(questionId: number, value: string | string[]) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function next() {
    if (index < BASIC_QUESTIONS.length - 1) {
      setIndex(index + 1); // Move to next question
    }
  }

  return (
    <div>
      <Form.Group
        controlId={`formQuestion${currentQuestion.id}`}
        key={currentQuestion.id}
      >
        {createQuestion(
          currentQuestion.name,
          currentQuestion.body,
          currentQuestion.type,
          currentQuestion.options,
          currentQuestion.limit,
          fontSize,
          /* This functionality of storing answer is ChatGPT-generated code. */
          (value: string | string[]) => updateAnswers(currentQuestion.id, value)
        )}
      </Form.Group>

      <Button
        onClick={next}
        disabled={!isAnswered || index >= BASIC_QUESTIONS.length - 1}
      >
        Next
      </Button>

      {/* Display current answers */}
      <div>
        <h5>Debug:</h5>
        <ul>
          {Object.entries(answers).map(([id, value]) => (
            <li key={id}>
              Question {id}:{" "}
              {Array.isArray(value) ? value.join(", ") : value || "No answer"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
