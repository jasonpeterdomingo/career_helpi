import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Title exists", () => {
  render(<App />);
  const title = screen.getByText("Penguin Quest");
  expect(title).toBeInTheDocument();
});
