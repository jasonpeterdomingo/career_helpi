import { Navbar, Nav, Container } from "react-bootstrap";

type Page = "home" | "basic" | "detailed";

interface NavigationBarProps {
  setPage: (page: Page) => void;
}

export function NavigationBar({ setPage }: NavigationBarProps) {
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
