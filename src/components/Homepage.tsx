import { Col, Row } from "react-bootstrap";
import "./cssStyling/Homepage.css";
import "./cssStyling/FigmaCard.css";
import penguin from "../assets/fullPenguin.png";

type Page = "home" | "basic" | "detailed";

interface HomepageProps {
  navigatePage: (page: Page) => void;
  fontSize: number;
  isValidKey: boolean;
  triggerWarning: () => void;
}

/**
 * Homepage Component
 *
 * This component renders the homepage of the application. There are two buttons to lead to the basic questions or detailed questions.
 *
 * Props:
 *  - `navigatePage` (function): A function to navigate to different pages.
 *  - `fontSize` (number): The font size for the text.
 *  - `isValidKey` (boolean): A flag to check if the API key is valid.
 *  - `triggerWarning` (function): A function to trigger a warning message.
 *
 */
export function Homepage({
  navigatePage,
  fontSize,
  isValidKey,
  triggerWarning,
}: HomepageProps) {
  return (
    <div className="page-container" style={{ fontSize: `${fontSize}px` }}>
      <div className="content-wrapper">
        <div className="header-section">
          <div className="text-content">
            <h1 className="header" style={{ fontSize: `${fontSize + 16}px` }}>
              Welcome to the Penguin Quest!
            </h1>
            <p style={{ marginTop: "1.5rem", fontSize: `${fontSize + 1}px` }}>
              Let penguin help you waddle down the right career path!{" "}
            </p>
          </div>
          <img src={penguin} alt="Penguin" className="penguin-image" />
        </div>
        <div className="homepage-wrapper">
          <div className="card-row-wrapper">
            <Row className="card-container">
              <Col className="d-flex justify-content-center">
                <div className="card-wrapper">
                  <div
                    data-testid="basic-card"
                    className="figma-card clickable-card"
                    onClick={() => {
                      if (isValidKey) {
                        navigatePage("basic");
                      } else {
                        triggerWarning();
                      }
                    }}
                  >
                    <div className="accent-right" />
                    <div className="accent-left" />
                    <div className="top-header-block" />
                    <div className="bottom-body-block" />
                    <div
                      className="card-title"
                      style={{ fontSize: `${fontSize + 18}px` }}
                    >
                      Basic Questions
                    </div>
                    <div
                      className="card-description"
                      style={{ fontSize: `${fontSize}px` }}
                    >
                      Answer a set of fundamental questions to receive broad yet
                      insightful career recommendations. The results are
                      tailored to your interests and personality, providing a
                      variety of potential career paths that align with your
                      traits. A progress bar will track your completion, and
                      once all questions are answered, you'll unlock your
                      results.
                    </div>
                  </div>
                </div>
              </Col>

              <Col className="d-flex justify-content-center">
                <div className="card-wrapper">
                  <div
                    data-testid="detailed-card"
                    className="figma-card clickable-card"
                    onClick={() => {
                      if (isValidKey) {
                        navigatePage("detailed");
                      } else {
                        triggerWarning();
                      }
                    }}
                  >
                    <div className="accent-right" />
                    <div className="accent-left" />
                    <div className="top-header-block" />
                    <div className="bottom-body-block" />
                    <div
                      className="card-title"
                      style={{ fontSize: `${fontSize + 17}px` }}
                    >
                      Detailed Questions
                    </div>
                    <div
                      className="card-description"
                      style={{ fontSize: `${fontSize}px` }}
                    >
                      Dive deeper into your career preferences by providing more
                      specific information about your work experience and
                      priorities. Additionally, you can filter career options
                      based on factors like work-life balance, salary, and
                      creative freedom—ensuring your results go beyond
                      personality and interests to reflect your ideal work
                      environment.
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
