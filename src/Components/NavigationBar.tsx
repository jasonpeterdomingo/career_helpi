import { Navbar, Nav, Container } from "react-bootstrap";
import { PAGE } from "../types/page";

interface NavigationBarProps {
  setPage: (page: PAGE) => void;
}

export function Navigation({ setPage }: NavigationBarProps) {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand onClick={() => setPage("home")}>
          Career Helpi
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="custom-nav-link" onClick={() => setPage("home")}>
            Home
          </Nav.Link>
          <Nav.Link
            className="custom-nav-link"
            onClick={() => setPage("basic")}
          >
            Basic Questions
          </Nav.Link>
          <Nav.Link
            className="custom-nav-link"
            onClick={() => setPage("detailed")}
          >
            Detailed Questions
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
