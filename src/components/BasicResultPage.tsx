//import ./DetailedQ1.css

import { Form } from "react-bootstrap";

export function BasicResultPage() {
  //pass in whatever state we want changes/to keep track of from app.tsx
  return (
    <div>
      <Form.Group controlId="basicResult">
        <Form.Label>This is the Basic Result Page!</Form.Label>
        <Form.Control />
      </Form.Group>
    </div>
  );
}
