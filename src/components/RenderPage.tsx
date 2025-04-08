import { PAGE } from "../types/page";
import { Homepage } from "../components/Homepage";
import { DisplayBasicQuestions } from "../components/DisplayQuestions/DisplayBasicQuestions";
import { DisplayDetailedQuestions } from "../components/DisplayQuestions/DisplayDetailedQuestions";

interface RenderPageProps {
  page: PAGE;
  fontSize: number;
  setPage: (page: PAGE) => void;
}

// Conditional logic for deciding what component to render
export function RenderPage({ page, fontSize, setPage }: RenderPageProps) {
  switch (page) {
    case "basic":
      return <DisplayBasicQuestions fontSize={fontSize} />;
    case "detailed":
      return <DisplayDetailedQuestions fontSize={fontSize} />;
    default:
      return <Homepage navigatePage={setPage} fontSize={fontSize} />; // Render the homepage by default
  }
}
