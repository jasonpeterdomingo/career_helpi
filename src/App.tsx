import React, { useState } from "react";
import "./App.css";
import { Form, Navbar, Nav, Container } from "react-bootstrap";
import { Homepage } from "./Components/Homepage";
import { DisplayBasicQuestions } from "./Components/DisplayQuestions/DisplayBasicQuestions";
import { DisplayDetailedQuestions } from "./Components/DisplayQuestions/DisplayDetailedQuestions";
import { FontSizeAdjuster } from "./Components/FontSizeAdjuster";

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)

let keyData = "";
/*
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}
  */

// Pages
type Page = "home" | "basic" | "detailed";

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [fontSize, setFontSize] = useState<number>(16); // For adjusting font size
  const [currentPage, setPage] = useState<Page>("home"); // For rendering different pages

  //sets the local storage item to the api key the user inputed
  /*
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }
    */
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  // Conditional logic for deciding what component to render
  function renderPage() {
    switch (currentPage) {
      case "basic":
        return <DisplayBasicQuestions fontSize={fontSize} />;
      case "detailed":
        return <DisplayDetailedQuestions fontSize={fontSize} />;
      default:
        return <Homepage navigatePage={setPage} fontSize={fontSize} />; // Render the homepage by default
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Names: Winnie Li, Jason Domingo, Ember Kerstetter</p>
      </header>
      {/* Bootstrap Navbar */}
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => setPage("home")}>
            Career Helpi
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setPage("home")}>Home</Nav.Link>
            <Nav.Link onClick={() => setPage("basic")}>
              Basic Questions
            </Nav.Link>
            <Nav.Link onClick={() => setPage("detailed")}>
              Detailed Questions
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <hr />
      <FontSizeAdjuster setFontSize={setFontSize} />
      <hr />
      {renderPage()}

      {/* Footer with API Key Input */}
      <footer className="App-footer">
        <Form>
          <Form.Label>API Key:</Form.Label>
          <Form.Control
            type="password"
            placeholder={key ? "" : "Insert API Key Here"} // originally just "Insert API Key Here", but i had to use the key variable so there were no deploy errors
            onChange={changeKey}
          ></Form.Control>
          <br></br>
          {/* <Button className="Submit-Button" onClick={handleSubmit}>
            Submit
          </Button> */}
        </Form>
      </footer>
    </div>
  );
}

export default App;
