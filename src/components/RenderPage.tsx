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

// Conditional logic for deciding what component to render
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
      return <BasicResultPage apiKey={apiKey} />;
    default:
      return <Homepage navigatePage={setPage} fontSize={fontSize} />; // Render the homepage by default
  }
}
