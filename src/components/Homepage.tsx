import { Button, Card, Col, Row } from "react-bootstrap";
import "./cssStyling/Homepage.css";

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
        <Row className="card-container">
          <Col className="d-flex justify-content-center">
            <div className="custom-card">
              <div className="card-accent-left" />
              <div className="card-accent-right" />

              <div className="card-header-section">
                <div className="card-header-text">Basic Questions</div>
              </div>

              <div className="card-body-section">
                Answer a set of fundamental questions to receive broad yet
                insightful career recommendations. The results are tailored to
                your interests and personality, providing a variety of potential
                career paths that align with your traits. A progress bar will
                track your completion, and once all questions are answered,
                you'll unlock your results.
                <div className="card-button-container">
                  <div className="card-button-text">Start Here</div>
                  <Button onClick={() => navigatePage("basic")}>
                    Start Here
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            <div className="custom-card">
              <div className="card-accent-left" />
              <div className="card-accent-right" />

              <div className="card-header-section">
                <div className="card-header-text">Detailed Questions</div>
              </div>

              <div className="card-body-section">
                Dive deeper into your career preferences by providing more
                specific information about your work experience and priorities.
                Additionally, you can filter career options based on factors
                like work-life balance, salary, and creative freedom—ensuring
                your results go beyond personality and interests to reflect your
                ideal work environment.
                <div className="card-button-container">
                  <div className="card-button-text">Start Here</div>
                  <Button onClick={() => navigatePage("detailed")}>
                    Start Here
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
