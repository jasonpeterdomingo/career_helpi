/** QuestionType influences how a question is asked and what kinds of answers are possible */
export type QuestionType = "multiple_choice_question" | "checklist_question" | "binary_question" | "opinion_question";

/** A representation of a Question in a quizzing application */
export interface Question {
    /** A unique identifier for the question */
    id: number;
    /** The human-friendly title of the question */
    name: string;
    /** The instructions and content of the Question */
    body: string;
    /** The kind of Question; influences how the user answers and what options are displayed */
    type: QuestionType;
    /** The possible answers for a Question */
    options: string[] | string[][];
    /** Limited the number of options you are allowed to choose (For checklist_question type) */
    limit: number | null;
}
