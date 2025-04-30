import { Navbar, Nav, Container } from "react-bootstrap";
import { PAGE } from "../types/page";
import "./cssStyling/Components.css";
import { FontSizeAdjuster } from "./FontSizeAdjuster";

interface NavigationBarProps {
  setPage: (page: PAGE) => void;
  setFontSize: (size: number) => void;
  fontSize: number;
}

/**
 * NavigationBar Component
 *
 * The navigation bar where user can navigate to home page, basic question page, and detailed question page.
 *
 * Props:
 * - `setPage` (function): Function that renders which page is displayed.
 *
 */
export function NavigationBar({
  setPage,
  setFontSize,
  fontSize,
}: NavigationBarProps) {
  return (
    <Navbar className="nav">
      <Container>
        <Navbar.Brand className="navber-brand" onClick={() => setPage("home")}>
          Penguin Quest
        </Navbar.Brand>
        <Nav className="ml-auto nav">
          <Nav.Link onClick={() => setPage("home")}>Home</Nav.Link>
          <Nav.Link onClick={() => setPage("basic")}>Basic Questions</Nav.Link>
          <Nav.Link onClick={() => setPage("detailed")}>
            Detailed Questions
          </Nav.Link>
        </Nav>
        <FontSizeAdjuster fontSize={fontSize} setFontSize={setFontSize} />
      </Container>
    </Navbar>
  );
}
