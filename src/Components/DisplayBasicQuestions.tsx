//import ./DetailedQ1.css

import { Form } from "react-bootstrap";
import React, { useState } from "react";
import { Question, QuestionType } from "../interfaces/question";
import { basicQuestions } from "../data/questions";
import { MultipleChoiceQuestion } from "./MultipeChoiceQuestion";
import { BinaryQuestion } from "./BinaryQuestion";

function createQuestion(
  name: string,
  body: string,
  type: QuestionType,
  options: string[] | string[][]
) {
  switch (type) {
    case "multiple_choice_question":
      return (
        <div>
          <MultipleChoiceQuestion
            name={name}
            body={body}
            options={options as string[]}
          ></MultipleChoiceQuestion>
        </div>
      );
    case "binary_question":
      return (
        <div>
          <BinaryQuestion
            name={name}
            body={body}
            options={options as string[][]}
          ></BinaryQuestion>
        </div>
      );
    case "checklist_question":
      return;
    case "opinion_question":
      return;
    default:
      throw Error("Invalid question type!");
  }
}

export function DisplayBasicQuestions() {
  //pass in whatever state we want changes/to keep track of from app.tsx
  //const [index, setIndex] = useState<number>(1);

  return (
    <div>
      {basicQuestions.map((question: Question) => {
        return (
          <Form.Group
            controlId={`formQuestion${question.id}`}
            key={question.id}
          >
            {createQuestion(
              question.name,
              question.body,
              question.type,
              question.options
            )}
          </Form.Group>
        );
      })}
    </div>
  );
}
