import { Navbar, Nav, Container } from "react-bootstrap";
import { PAGE } from "../types/page";
import "./cssStyling/Components.css";

interface NavigationBarProps {
  setPage: (page: PAGE) => void;
}

export function NavigationBar({ setPage }: NavigationBarProps) {
  return (
    <Navbar className="nav">
      <Container>
        <Navbar.Brand className="navber-brand" onClick={() => setPage("home")}>
          Career Helpi
        </Navbar.Brand>
        <Nav className="ml-auto nav">
          <Nav.Link onClick={() => setPage("home")}>Home</Nav.Link>
          <Nav.Link onClick={() => setPage("basic")}>Basic Questions</Nav.Link>
          <Nav.Link onClick={() => setPage("detailed")}>
            Detailed Questions
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
