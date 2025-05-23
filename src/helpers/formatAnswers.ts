
/**
 * This helper function Validates the answers to the questions by checking if they are empty or not.
 * @param questions The questions to be validated
 * @param answers - The user answers to validate
 * @returns - True if all answers are valid, false otherwise
 */
export function ValidateAnswers(questions: {id: number, body: string}[], answers: {[id: number]: string | string[]}): boolean {
    return questions.every(({id}) => {
        const answer = answers[id];
        if (Array.isArray(answer)) {
            return answer.length > 0 && answer.every((a) => a.trim() !== "")
        } else if (typeof answer === "string") {
            return answer.trim() !== "";
        } else {
            return false;  // Handle unexpected types
        }
    })
    // this validation check covers all the cases of the answers since users are forced to answer all the questions (UI enforcement)
}


/**
 * This is a helper function to help format the answers to the questions to be used as a prompt for ChatGPT.
 * @param questions The questions to be formatted
 * @param answers The user answer to the questions
 * @returns The formatted answer prompt
 */
export function FormattedAnswerPrompt(questions: {id: number, body: string}[], answers: {[id: number]: string | string[]}): string {
    const prompt = questions.reduce((acc, question) => {
        const userAnswer = answers[question.id];
        
        // Handling multi-select answers (with the help of AI)
        const formattedAnswer = Array.isArray(userAnswer) 
        ? userAnswer.join(", ")
        : userAnswer || "(No answer provided)";
        return (
            acc + `Question: ${question.body}\nAnswer: ${formattedAnswer}\n\n`);
        }, "");
    return `Here are my answers to a career quiz:\n\n${prompt}Based on these answers please provide me with a list of 5 career options that I should consider. Please include a brief description of each option and why it would be a good fit for me.`;
}