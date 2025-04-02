import { Button } from "react-bootstrap";

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
      <h1>Welcome to The Career Helpi!</h1>
      <p>Description here...</p>

      <h2>Basic Questions</h2>
      <Button onClick={() => navigatePage("basic")}>Start Here</Button>

      <h2>Detailed Questions</h2>
      <Button onClick={() => navigatePage("detailed")}>Start Here</Button>
    </div>
  );
}
