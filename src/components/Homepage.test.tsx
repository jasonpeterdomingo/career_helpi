import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { Homepage } from "./Homepage";

test("Homepage renders without crashing", () => {
  render(<Homepage navigatePage={jest.fn()} fontSize={16} />);
});

// check if welcome message is rendered
test("Homepage welcome message displays", () => {
  render(<Homepage navigatePage={jest.fn()} fontSize={16} />);
  expect(
    screen.getByRole("heading", { name: /welcome to the penguin quest!/i })
  ).toBeInTheDocument();
});

// check if cards are displayed
test("renders Basic and Detailed question cards", () => {
  render(<Homepage navigatePage={jest.fn()} fontSize={16} />);
  expect(screen.getByText("Basic Questions")).toBeInTheDocument();
  expect(screen.getByText("Detailed Questions")).toBeInTheDocument();
});

// check if font size is applied dynamically
test("correct font-sizes are applied based on props", () => {
  render(<Homepage navigatePage={jest.fn()} fontSize={20} />);
  const header = screen.getByRole("heading", {
    name: /welcome to the penguin quest!/i,
  });
  expect(header).toHaveStyle("font-size: 36px");

  const basicTitle = screen.getByText("Basic Questions");
  expect(basicTitle).toHaveStyle("font-size: 38px");
});

// verify functional card click navigation
test("clicking Basic Q card navigates to basic page", () => {
  const navigate = jest.fn();
  render(<Homepage navigatePage={navigate} fontSize={16} />);

  const basicCard = screen.getByText("Basic Questions");
});
