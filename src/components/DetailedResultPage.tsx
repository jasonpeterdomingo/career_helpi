import React, { useEffect, useState } from "react";
import { GenerateCareerReport } from "../api/openaiApi";
import { FormattedAnswerPrompt } from "../helpers/formatAnswers";
import { DETAILED_QUESTIONS } from "../data/questions";
import { ResultsChart } from "./ResultsChart";
import { CareerReport } from "../helpers/careerReport";
import "../components/cssStyling/Results.css";

/**
 * DetailedResultPageProps Interface
 * apiKey: string - The API key for OpenAI.
 */
interface DetailedResultPageProps {
  apiKey: string;
  answers: { [id: number]: string | string[] };
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
 *
 * Returns:
 * - A JSX element representing the results for the Detailed Quiz.
 */
export function DetailedResultPage({
  apiKey,
  answers,
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
      <h1>Career Report</h1>
      {error && <p>{error}</p>}
      {!report && !error && <p>Generating report...</p>}
      {report && (
        <div className="detailed-result">
          <ResultsChart pieData={pieData} barData={barData} />
          <div className="career-matches-wrapper">
            <h2>Top Career Matches for You</h2>
            <ul>
              {report.topCareerMatches.map((career, index) => (
                <div className="career-item">
                  <div key={index}>
                    <h3>{career.title}</h3>
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
