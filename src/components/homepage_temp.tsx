import { Button } from "react-bootstrap";
import "./Components.css";

type Page = "home" | "basic" | "detailed";

interface HomepageProps {
  navigatePage: (page: Page) => void;
  fontSize: number;
}

/**
 * Homepage Component
 *
 * This component renders the homepage of the application. There are two buttons to lead to the basic questions or detailed questions.
 *
 * Props:
 *  - `navigatePage` (function): A function to navigate to different pages.
 *
 */
export function Homepage({ navigatePage, fontSize }: HomepageProps) {
  return (
    <div style={{ fontSize: `${fontSize}px` }}>
      <div className="text">
        <h1 className="header">Welcome to The Career Helpi!</h1>
        <h2 className="title">Basic Questions</h2>
        <p className="description-text">
          Answer a set of fundamental questions to receive broad yet insightful
          career recommendations. The results are tailored to your interests and
          personality, providing a variety of potential career paths that align
          with your traits. A progress bar will track your completion, and once
          all questions are answered, you'll unlock your results.
        </p>
        <Button onClick={() => navigatePage("basic")}>Start Here</Button>

        <h2 className="title">Detailed Questions</h2>
        <p className="description-text">
          Dive deeper into your career preferences by providing more specific
          information about your work experience and priorities. This section
          allows you to indicate whether you have career experience, enabling
          more tailored questions about your work preferences. Additionally, you
          can filter career options based on factors like work-life balance,
          salary, and creative freedom—ensuring your results go beyond
          personality and interests to reflect your ideal work environment.
        </p>
        <Button onClick={() => navigatePage("detailed")}>Start Here</Button>
      </div>
    </div>
  );
}
