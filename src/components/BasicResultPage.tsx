//import ./DetailedQ1.css
import React, { useEffect, useState } from "react";
// import { Form } from "react-bootstrap";
import { GenerateCareerReport } from "../api/openaiApi";
import { FormattedAnswerPrompt } from "../helpers/formatAnswers";
import { BASIC_QUESTIONS } from "../data/questions";

/**
 * BasicResultPageProps Interface
 * apiKey: string - The API key for OpenAI.
 */
interface BasicResultPageProps {
  apiKey: string;
  answers: { [id: number]: string | string[] };
}

/**
 * BasicResultPage Component
 *
 * This component displays a basic result page with a form.
 *
 * Props:
 * - `apiKey` (string): The API key for OpenAI.
 * - `answers` ({ [id: number]: string | string[] }): The answers to the questions.
 *
 * Returns:
 * - A JSX element representing the basic result page.
 */
export function BasicResultPage({
  apiKey,
  answers,
}: BasicResultPageProps): React.JSX.Element {
  const [report, setReport] = useState<string>("");

  /**
   * Function to generate a career report using the OpenAI API.
   */
  useEffect(() => {
    async function generateReport() {
      if (!apiKey) {
        console.error("Missing API Key");
        return;
      }
      const prompt = FormattedAnswerPrompt(BASIC_QUESTIONS, answers);
      const careerReport = await GenerateCareerReport(prompt, apiKey);
      setReport(careerReport);
    }

    generateReport();
  }, [apiKey, answers]); // Dependency array to re-run the effect when apiKey or answers change
  return (
    <div>
      <h1>Career Report</h1>
      {report ? <p>{report}</p> : <p>Generating report...</p>}
      {/* <Form.Group controlId="basicResult">
        <Form.Label>This is the Basic Result Page!</Form.Label>
        <Form.Control />
      </Form.Group> */}
    </div>
  );
}
