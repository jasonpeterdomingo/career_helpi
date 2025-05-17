import { Navbar, Nav, Container } from "react-bootstrap";
import { PAGE } from "../types/page";
import "./cssStyling/Components.css";
import { FontSizeAdjuster } from "./FontSizeAdjuster";
import logo from "../assets/penguinHead.png";

interface NavigationBarProps {
  setPage: (page: PAGE) => void;
  setFontSize: (size: number) => void;
  fontSize: number;
  isValidKey: boolean;
  triggerWarning: () => void;
}

/**
 * NavigationBar Component
 *
 * The navigation bar where user can navigate to home page, basic question page, and detailed question page.
 *
 * Props:
 * - `setPage` (function): Function that renders which page is displayed.
 * - `setFontSize` (function): Function that sets the font size.
 * - `fontSize` (number): The current font size.
 * - `isValidKey` (boolean): Indicates if the API key is valid.
 * - `triggerWarning` (function): Function that triggers a warning message.
 *
 */
export function NavigationBar({
  setPage,
  setFontSize,
  fontSize,
  isValidKey,
  triggerWarning,
}: NavigationBarProps) {
  return (
    <Navbar className="nav" data-testid="navbar">
      <Container>
        <Navbar.Brand
          onClick={() => setPage("home")}
          className="navbar-brand-container"
        >
          <div className="navbar-brand-inner">
            <img src={logo} alt="Penguin Logo" className="navbar-logo" />
            <span className="navbar-brand">Penguin Quest</span>
          </div>
        </Navbar.Brand>
        <Nav className="ml-auto nav">
          <Nav.Link onClick={() => setPage("home")}>Home</Nav.Link>
          <Nav.Link
            onClick={() => {
              if (isValidKey) {
                setPage("basic");
              } else {
                triggerWarning();
              }
            }}
          >
            Basic Questions
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              if (isValidKey) {
                setPage("detailed");
              } else {
                triggerWarning();
              }
            }}
          >
            Detailed Questions
          </Nav.Link>
        </Nav>
        <FontSizeAdjuster fontSize={fontSize} setFontSize={setFontSize} />
      </Container>
    </Navbar>
  );
}
