//import ./DetailedQ1.css

import { Form, ProgressBar, Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { DETAILED_QUESTIONS } from "../../data/questions";
import {
  createQuestion,
  isQuestionAnswered,
} from "../../Helpers/displayQuestionHelpers";

/**
 * DisplayDetailedQuestions Component
 *
 * This component renders questions where users can navigate through one question at a time.
 * The user can move to the next question by clicking a "Next" button.
 *
 * Props:
 * - `fontSize` (number): Font size.
 * - `DETAILED_QUESTIONS` (Question[]): An array of question objects.
 *
 * State:
 * - `index` (number): Tracks the index of the currently displayed question.
 * - `answers` ({ [id: number]: string | string[] }): Stores the answers for each question.
 * - `showModal` (boolean): State for whether the modal should be displayed.
 *
 */
export function DisplayDetailedQuestions({
  fontSize,
}: {
  fontSize: number;
}): React.JSX.Element {
  const [index, setIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [id: number]: string | string[] }>(
    {}
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const currentQuestion = DETAILED_QUESTIONS[index];

  const handleClose = () => setShowModal(false);

  const answer = answers[currentQuestion.id];
  const isAnswered = isQuestionAnswered(
    currentQuestion.type,
    answer,
    currentQuestion.options
  );

  function next() {
    if (index < DETAILED_QUESTIONS.length - 1) {
      setIndex(index + 1); // Move to next question
    } else {
      if (progress === 100) {
        setShowModal(true);
      }
    }
  }

  /* This functionality of storing user answer for given question ID is ChatGPT-generated code. */
  function updateAnswers(questionId: number, value: string | string[]) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  const totalQuestions = DETAILED_QUESTIONS.length;
  const answered = isAnswered ? index + 1 : index;
  const progress = Math.round((answered / totalQuestions) * 100);

  return (
    <div>
      <ProgressBar
        now={progress}
        label={`${progress}%`}
        style={{
          marginBottom: "20px",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      />

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

      <Button onClick={next} disabled={!isAnswered}>
        {index === DETAILED_QUESTIONS.length - 1 ? "Submit" : "Next"}
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

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>You finish the Quiz!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Congratulations! You have completed all the questions.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
