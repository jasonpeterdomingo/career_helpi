//import ./DetailedQ1.css

import { Form, ProgressBar, Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { DETAILED_QUESTIONS } from "../../data/questions";
import {
  createQuestion,
  isQuestionAnswered,
} from "../../helpers/displayQuestionHelpers";
import "../cssStyling/Components.css";
import nextArrow from "../../assets/black-right-arrow.png";
import backArrow from "../../assets/black-left-arrow.png";
import "./../cssStyling/Buttons.css";
import "./../cssStyling/QuestionBackground.css";

/**
 * DisplayBasicQuestionsProps Interface
 */
interface DisplayDetailedQuestionsProps {
  fontSize: number;
  onFinishQuiz: (answers: { [id: number]: string | string[] }) => void;
  initialAnswers: { [id: number]: string | string[] };
}

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
  onFinishQuiz,
  initialAnswers,
}: DisplayDetailedQuestionsProps): React.JSX.Element {
  const [index, setIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [id: number]: string | string[] }>(
    {}
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const currentQuestion = DETAILED_QUESTIONS[index];

  const handleClose = () => {
    setShowModal(false);
    onFinishQuiz(answers);
  };

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
    if (index < DETAILED_QUESTIONS.length - 1) {
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

  //This allows for proper focusing of the back button (for css styling)
  const handleBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    back();
    e.currentTarget.blur();
  };
  //This allows for proper focusing of the next button (for css styling)
  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    next();
    e.currentTarget.blur();
  };

  const totalQuestions = DETAILED_QUESTIONS.length;
  const answered = isAnswered ? index + 1 : index;
  const progress = Math.round((answered / totalQuestions) * 100);

  return (
    <div className="background-container">
      <ProgressBar
        now={progress}
        label={`${progress}%`}
        className="custom-progress-bar"
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

      <div id="CircleButtonContainer">
        {/* Back Button */}
        <Button
          id="CircleButton"
          className="button"
          type="button"
          onClick={handleBack}
          disabled={index === 0}
        >
          <img src={backArrow} alt="Back Button" className="buttonImage" />
        </Button>

        {/* Next or Submit Button */}
        <Button
          id="CircleButton"
          className="button"
          type={index === DETAILED_QUESTIONS.length - 1 ? "submit" : "button"}
          onClick={handleNext}
          disabled={!isAnswered}
          variant="light"
        >
          <img
            src={nextArrow}
            alt={
              index === DETAILED_QUESTIONS.length - 1
                ? "Submit Button"
                : "Next Button"
            }
            className="buttonImage"
          />
        </Button>
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
