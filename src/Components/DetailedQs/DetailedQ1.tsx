//import ./DetailedQ1.css

import { Form } from "react-bootstrap";

export function detailedQ1() {
  //pass in whatever state we want changes/to keep track of from app.tsx
  return (
    <div>
      <Form.Group controlId="formQuestion1">
        <Form.Label>Question 1</Form.Label>
        <Form.Control />
      </Form.Group>
    </div>
  );
}
