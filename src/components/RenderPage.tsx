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
}

// Conditional logic for deciding what component to render
export function RenderPage({
  page,
  fontSize,
  setPage,
  apiKey,
}: RenderPageProps) {
  switch (page) {
    case "basic":
      return (
        <DisplayBasicQuestions navigatePage={setPage} fontSize={fontSize} />
      );
    case "detailed":
      return <DisplayDetailedQuestions fontSize={fontSize} />;
    case "basicResult":
      return <BasicResultPage apiKey={apiKey} />;
    default:
      return <Homepage navigatePage={setPage} fontSize={fontSize} />; // Render the homepage by default
  }
}
