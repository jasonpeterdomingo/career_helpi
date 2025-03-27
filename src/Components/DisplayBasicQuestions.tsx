//import ./DetailedQ1.css

import { Form } from "react-bootstrap";
import React, { useState } from "react";
import { basicQuestions } from "../data/questions";
import { createQuestion } from "../Helpers/displayQuestionHelpers";
import { Button } from "react-bootstrap";

/**
 * DisplayBasicQuestions Component
 *
 * This component renders questions where users can navigate through one question at a time.
 * The user can move to the next question by clicking a "Next" button.
 *
 * Props:
 * - `basicQuestions` (Question[]): An array of question objects.
 *
 * State:
 * - `index` (number): Tracks the index of the currently displayed question.
 *
 */
export function DisplayBasicQuestions() {
  const [index, setIndex] = useState<number>(0);
  const currentQuestion = basicQuestions[index];

  function next() {
    if (index < basicQuestions.length - 1) {
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
          currentQuestion.options
        )}
      </Form.Group>

      <Button onClick={next} disabled={index >= basicQuestions.length - 1}>
        Next
      </Button>
    </div>
  );
}
