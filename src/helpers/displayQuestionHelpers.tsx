import { MultipleChoiceQuestion } from "../components/QuestionTypes/MultipeChoiceQuestion";
import { BinaryQuestion } from "../components/QuestionTypes/BinaryQuestion";
import { ChecklistQuestion } from "../components/QuestionTypes/ChecklistQuestion";
import { OpinionQuestion } from "../components/QuestionTypes/OpinionQuestion";
import { InputQuestion } from "../components/QuestionTypes/InputQuestion";
import { QuestionType } from "../types/question";

/**
 * createQuestion Function
 *
 * This function dynamically generates different types of question components based on the
 * provided question type.
 *
 * Params:
 * - `name` (string): The question title.
 * - `body` (string): The question instructions.
 * - `type` (QuestionType): The question type.
 * - `options` (string[] | string[][]):
 *   - For "multiple_choice_question", a list of options (string[]) for the user to choose from.
 *   - For "binary_question", a 2D array (string[][]) with two options.
 *   - For "checklist_question", a list of options (string[]) for the user to select multiple choices.
 *   - For "opinion_question", a list of options (string[]) for the user to select one opinion-based answer.
 * - `limit` (number | null): A limit to how many answer choices can be selected. If null,
 * then user can select any amount of answer choices (Applies to checklist_question type).
 * - `fontSize` (number): Font size.
 * - `onChange` ((value: string | string[]) => void): Callback function to capture user responses.
 * - `answer` (string | string[]): The current answer(s) passed from the parent component (DisplayBasicQuestions or DisplayDetailedQuestions). This helps sync the selected answer(s).
 *
 * Returns:
 * - A JSX element representing the corresponding question component. The component returned depends
 *   on the `type` provided. Possible components are:
 *   - `<MultipleChoiceQuestion />`
 *   - `<BinaryQuestion />`
 *   - `<ChecklistQuestion />`
 *   - `<OpinionQuestion />`
 *
 */
export function createQuestion(
  name: string,
  body: string,
  type: QuestionType,
  options: string[] | string[][],
  limit: number | null,
  fontSize: number,
  onChange: (value: string | string[]) => void,
  answer: string | string[]
) {
  switch (type) {
    case "multiple_choice_question":
      return (
        <div>
          <MultipleChoiceQuestion
            name={name}
            body={body}
            options={options as string[]}
            fontSize={fontSize}
            onChange={onChange}
            answer={answer as string}
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
            fontSize={fontSize}
            onChange={onChange}
            answers={answer as string[]}
          ></BinaryQuestion>
        </div>
      );
    case "checklist_question":
      return (
        <div>
          <ChecklistQuestion
            name={name}
            body={body}
            options={options as string[]}
            limit={limit}
            fontSize={fontSize}
            onChange={onChange}
            answers={answer as string[]}
          ></ChecklistQuestion>
        </div>
      );
    case "opinion_question":
      return (
        <div>
          <OpinionQuestion
            name={name}
            body={body}
            options={options as string[]}
            fontSize={fontSize}
            onChange={onChange}
            answer={answer as string}
          ></OpinionQuestion>
        </div>
      );
    case "input_question":
      return (
        <InputQuestion
          name={name}
          body={body}
          fontSize={fontSize}
          onChange={onChange}
          answer={answer as string}
        ></InputQuestion>
      );
    default:
      throw Error("Invalid question type!");
  }
}

/**
 * isQuestionAnswered Function
 *
 * This function determines whether a question has been sufficiently answered
 * based on its type and the user's current response.
 *
 * Params:
 * - `type` (QuestionType): The type of the question.
 * - `answer` (string | string[]): The user's current answer.
 *   - For "binary_question": An array of strings representing choices for each binary pair.
 *   - For "checklist_question": An array of selected options.
 *   - For "multiple_choice_question" and "opinion_question": A single selected string.
 * - `options` (string[] | string[][]): The list of options for the question.
 *
 * Returns:
 * - `true` if the question has been answered according to its requirements.
 * - `false` if the answer is missing or incomplete.
 *   - For "binary_question": Returns true if all pairs are answered (non-empty and matching number of pairs).
 *   - For "checklist_question": Returns true if at least one option is selected.
 *   - For "multiple_choice_question", "opinion_question", "input_question": Returns true if a non-empty string is selected or if response is non-empty.
 */
export function isQuestionAnswered(
  type: QuestionType,
  answer: string | string[],
  options: string[] | string[][]
): boolean {
  if (!answer) return false;

  const isArray = Array.isArray(answer);

  if (type === "binary_question") {
    return (
      isArray &&
      answer.length === options.length &&
      answer.every((a) => a !== "")
    );
  }

  if (type === "checklist_question") {
    return isArray && answer.length > 0;
  }

  return !isArray && answer !== "";
}
