import { Col, Row } from "react-bootstrap";
import "./cssStyling/Homepage.css";
import "./cssStyling/FigmaCard.css";

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
    <div className="page-container" style={{ fontSize: `${fontSize}px` }}>
      <div className="content-wrapper">
        <h1 className="header">Welcome to The Career Helpi!</h1>
        <div className="homepage-wrapper">
          <Row className="card-container">
            <Col className="d-flex justify-content-center">
              <div className="card-wrapper">
                <div
                  className="figma-card clickable-card"
                  onClick={() => navigatePage("basic")}
                >
                  <div className="accent-right" />
                  <div className="accent-left" />
                  <div className="top-header-block" />
                  <div className="bottom-body-block" />
                  <div className="card-title">Basic Questions</div>
                  <div className="card-description">
                    Answer a set of fundamental questions to receive broad yet
                    insightful career recommendations. The results are tailored
                    to your interests and personality, providing a variety of
                    potential career paths that align with your traits. A
                    progress bar will track your completion, and once all
                    questions are answered, you'll unlock your results.
                  </div>
                  {/*
                  <div
                    className="card-button"
                    onClick={() => navigatePage("basic")}
                  >
                    <div className="card-button-text">Start Here</div>
                  </div>
      */}
                </div>
              </div>
            </Col>

            <Col className="d-flex justify-content-center">
              <div className="card-wrapper">
                <div
                  className="figma-card clickable-card"
                  onClick={() => navigatePage("detailed")}
                >
                  <div className="accent-right" />
                  <div className="accent-left" />
                  <div className="top-header-block" />
                  <div className="bottom-body-block" />
                  <div className="card-title">Detailed Questions</div>
                  <div className="card-description">
                    Dive deeper into your career preferences by providing more
                    specific information about your work experience and
                    priorities. Additionally, you can filter career options
                    based on factors like work-life balance, salary, and
                    creative freedom—ensuring your results go beyond personality
                    and interests to reflect your ideal work environment.
                  </div>
                  {/*
                <div
                  className="card-button"
                  onClick={() => navigatePage("detailed")}
                >
                  <div className="card-button-text">Start Here</div>
                </div>
                */}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
