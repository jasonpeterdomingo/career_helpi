import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Title exists", () => {
  render(<App />);
  const title = screen.getByText("Penguin Quest");
  expect(title).toBeInTheDocument();
});

describe("NavigationBar Component", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Check that we're on the home page", () => {
    const header = "Welcome to the Penguin Quest!";
    expect(screen.getByText(header)).toBeInTheDocument();
  });

  test("Renders all the link on navigation bar", () => {
    const homeLink = screen.getByRole("button", { name: "Home" });
    const basicQuestionLink = screen.getByRole("button", {
      name: "Basic Questions",
    });
    const detailedQuestionLink = screen.getByRole("button", {
      name: "Detailed Questions",
    });

    expect(homeLink).toBeInTheDocument();
    expect(basicQuestionLink).toBeInTheDocument();
    expect(detailedQuestionLink).toBeInTheDocument();
  });

  test("Clicking basic question goes to basic question page", () => {
    const basicQuestionLink = screen.getByRole("button", {
      name: "Basic Questions",
    });

    // Click on basic question button on nav bar
    act(() => {
      basicQuestionLink.click();
    });

    // Check if the basic question title is there
    expect(screen.getByText("Basic Question 1")).toBeInTheDocument();
  });

  test("Clicking detailed question goes to detailed question page", () => {
    const detailedQuestionLink = screen.getByRole("button", {
      name: "Detailed Questions",
    });

    // Click on detailed question button on nav bar
    act(() => {
      detailedQuestionLink.click();
    });

    // Check if the detailed question title is there
    expect(screen.getByText("Detailed Question 1")).toBeInTheDocument();
  });

  test("Clicking home goes to home page", () => {
    // Goes to basic question page
    const basicQuestionLink = screen.getByRole("button", {
      name: "Basic Questions",
    });
    act(() => {
      basicQuestionLink.click();
    });

    // Goes to home page
    const homeLink = screen.getByRole("button", { name: "Home" });
    act(() => {
      homeLink.click();
    });

    // Check if the home page title is there
    expect(
      screen.getByText("Welcome to the Penguin Quest!")
    ).toBeInTheDocument();
  });
});
