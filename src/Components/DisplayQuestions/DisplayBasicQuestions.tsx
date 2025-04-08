//import ./DetailedQ1.css

import { Form, Button, ProgressBar, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { BASIC_QUESTIONS } from "../../data/questions";
import {
  createQuestion,
  isQuestionAnswered,
} from "../../helpers/displayQuestionHelpers";

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
 * - `answers` ({ [id: number]: string | string[] }): Stores the answers for each question.
 * - `showModal` (boolean): State for whether the modal should be displayed.
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
  const [showModal, setShowModal] = useState<boolean>(false);
  const currentQuestion = BASIC_QUESTIONS[index];

  const handleClose = () => setShowModal(false);

  const answer = answers[currentQuestion.id];
  const isAnswered = isQuestionAnswered(
    currentQuestion.type,
    answer,
    currentQuestion.options
  );

  /* This functionality of storing user answer for given question ID is ChatGPT-generated code. */
  function updateAnswers(questionId: number, value: string | string[]) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function next() {
    if (index < BASIC_QUESTIONS.length - 1) {
      setIndex(index + 1); // Move to next question
    } else {
      if (progress === 100) {
        setShowModal(true);
      }
    }
  }

  function back() {
    if (index > 0) {
      setIndex(index - 1); // Move to previous question
    }
  }

  const totalQuestions = BASIC_QUESTIONS.length;
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
          (value: string | string[]) =>
            updateAnswers(currentQuestion.id, value),
          answer
        )}
      </Form.Group>

      <Button onClick={back} disabled={index === 0}>
        Back
      </Button>

      <Button onClick={next} disabled={!isAnswered}>
        {index === BASIC_QUESTIONS.length - 1 ? "Submit" : "Next"}
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
