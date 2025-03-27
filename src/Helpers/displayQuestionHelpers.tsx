import { MultipleChoiceQuestion } from "../Components/QuestionTypes/MultipeChoiceQuestion";
import { BinaryQuestion } from "../Components/QuestionTypes/BinaryQuestion";
import { ChecklistQuestion } from "../Components/QuestionTypes/ChecklistQuestion";
import { OpinionQuestion } from "../Components/QuestionTypes/OpinionQuestion";
import { QuestionType } from "../interfaces/question";

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
      return (
        <div>
          <ChecklistQuestion
            name={name}
            body={body}
            options={options as string[]}
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
          ></OpinionQuestion>
        </div>
      );
    default:
      throw Error("Invalid question type!");
  }
}
