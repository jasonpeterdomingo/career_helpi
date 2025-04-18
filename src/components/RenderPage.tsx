import { PAGE } from "../types/page";
import { BasicResultPage } from "./BasicResultPage";
import {
  Homepage,
  DisplayBasicQuestions,
  DisplayDetailedQuestions,
} from "./index";

interface RenderPageProps {
  page: PAGE;
  fontSize: number;
  setPage: (page: PAGE) => void;
  apiKey: string;
  basicAnswers: { [id: number]: string | string[] };
  setBasicAnswers: (answers: { [id: number]: string | string[] }) => void;
}

/**
 * RenderPage Component
 *
 * Control component that decide what component to render.
 *
 * Props:
 * - `page` (PAGE): The page of the webpage.
 * - `fontSize` (number): Font size.
 * - `setPage` (function): Function that renders which page is displayed.
 * - `apiKey` (string): API Key for OpenAI.
 * - `basicAnswers` ({ [id: number]: string | string[] }): Stored answers for basic questions.
 * - `setBasicAnswers` (function): Update the answers for basic questions.
 *
 */
export function RenderPage({
  page,
  fontSize,
  setPage,
  apiKey,
  basicAnswers,
  setBasicAnswers,
}: RenderPageProps) {
  switch (page) {
    case "basic":
      return (
        <DisplayBasicQuestions
          fontSize={fontSize}
          onFinishQuiz={(collectedAnswers) => {
            setBasicAnswers(collectedAnswers);
            setPage("basicResult");
          }}
          initialAnswers={basicAnswers}
        />
      );
    case "detailed":
      return <DisplayDetailedQuestions fontSize={fontSize} />;
    case "basicResult":
      return <BasicResultPage apiKey={apiKey} answers={basicAnswers} />;
    default:
      return <Homepage navigatePage={setPage} fontSize={fontSize} />; // Render the homepage by default
  }
}
