//import ./DetailedQ1.css

import { Form } from "react-bootstrap";
import React, { useState } from "react";
import { DETAILED_QUESTIONS } from "../../data/questions";
import { createQuestion } from "../../Helpers/displayQuestionHelpers";
import { Button } from "react-bootstrap";

/**
 * DisplayDetailedQuestions Component
 *
 * This component renders questions where users can navigate through one question at a time.
 * The user can move to the next question by clicking a "Next" button.
 *
 * Props:
 * - `DETAILED_QUESTIONS` (Question[]): An array of question objects.
 *
 * State:
 * - `index` (number): Tracks the index of the currently displayed question.
 *
 */
export function DisplayDetailedQuestions() {
  const [index, setIndex] = useState<number>(0);
  const currentQuestion = DETAILED_QUESTIONS[index];

  function next() {
    if (index < DETAILED_QUESTIONS.length - 1) {
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
          currentQuestion.limit
        )}
      </Form.Group>

      <Button onClick={next} disabled={index >= DETAILED_QUESTIONS.length - 1}>
        Next
      </Button>
    </div>
  );
}
