import React, { useEffect, useState } from "react";
import { GenerateCareerReport } from "../api/openaiApi";
import {
  FormattedAnswerPrompt,
  ValidateAnswers,
} from "../helpers/formatAnswers";
import { DETAILED_QUESTIONS } from "../data/questions";
import { ResultsChart } from "./ResultsChart";
import { CareerReport } from "../helpers/careerReport";
import "../components/cssStyling/Results.css";
import { LoadingScreen } from "./LoadingScreen";

/**
 * DetailedResultPageProps Interface
 * apiKey: string - The API key for OpenAI.
 * answers: { [id: number]: string | string[] } - Stored answers.
 * fontSize: number - Font size.
 */
interface DetailedResultPageProps {
  apiKey: string;
  answers: { [id: number]: string | string[] };
  fontSize: number;
}

/**
 * DetailedResultPage Component
 *
 * This component displays a result page for the Detailed Quiz.
 * It generates a career report based on the user's answers to the questions.
 * There are three main sections:
 * 1. Pie chart showing the work style breakdown.
 * 2. Bar chart showing the work activity preferences.
 * 3. A list of top career matches with their details.
 *
 * Props:
 * - `apiKey` (string): The API key for OpenAI.
 * - `answers` ({ [id: number]: string | string[] }): The answers to the questions.
 * - `fontSize` (number): The font size.
 *
 * Returns:
 * - A JSX element representing the results for the Detailed Quiz.
 */
export function DetailedResultPage({
  apiKey,
  answers,
  fontSize,
}: DetailedResultPageProps): React.JSX.Element {
  const [report, setReport] = useState<CareerReport | null>(null); // State to store the generated report
  const [error, setError] = useState<string | null>(null); // State to store any error messages

  /**
   * useEffect Hook to generate the career report
   */
  useEffect(() => {
    let localError: string | null = null; // Local error variable to capture errors (AI-Generated)
    async function generateReport() {
      if (!apiKey) {
        localError = "Please enter your OpenAI API key.";
        return;
      }
      try {
        if (!ValidateAnswers(DETAILED_QUESTIONS, answers)) {
          alert(
            "Some answers are missing or invalid. Please check your answers."
          );
          return;
        }
        const prompt = FormattedAnswerPrompt(DETAILED_QUESTIONS, answers);
        const response = await GenerateCareerReport(prompt, apiKey);
        const parsedReport: CareerReport = JSON.parse(response);
        setReport(parsedReport);
      } catch (e) {
        console.error(e);
        localError =
          "An error occurred while generating the report. Please try again.";
      }
    }

    generateReport().then(() => {
      if (localError) setError(localError);
    });
  }, [apiKey, answers, error]); // Dependency array to re-run the effect when apiKey or answers change

  // Pie chart data
  const pieData = report
    ? Object.entries(report.workStyleBreakdown).map(([name, value]) => ({
        name,
        value,
      }))
    : [];

  // Bar chart data
  const barData = report
    ? Object.entries(report.workActivityPreferences).map(
        ([category, score]) => ({
          category,
          score,
        })
      )
    : [];

  return (
    <div>
      {error && <p>{error}</p>}
      {!report && !error && <LoadingScreen />}
      {report && (
        <div className="detailed-result">
          <ResultsChart
            pieData={pieData}
            barData={barData}
            fontSize={fontSize}
          />
          <div className="career-matches-wrapper">
            <h2 style={{ fontSize: `${fontSize + 17}px` }}>
              Top Career Matches for You
            </h2>
            <ul>
              {report.topCareerMatches.map((career, index) => (
                <div
                  className="career-item"
                  style={{ fontSize: `${fontSize}px` }}
                >
                  <div key={index}>
                    <h3 style={{ fontSize: `${fontSize + 2}px` }}>
                      {career.title}
                    </h3>
                    <p>{career.description}</p>
                    <p>Average Annual Salary: ${career.averageAnnualSalary}</p>
                    <p>Projected Growth: {career.projectedGrowth}%</p>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
