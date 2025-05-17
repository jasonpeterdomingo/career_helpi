import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Title exists", () => {
  render(<App />);
  const title = screen.getByText("Penguin Quest");
  expect(title).toBeInTheDocument();
});

describe("NavigationBar Component", () => {
  test("Check that we're on the home page", () => {
    render(<App />);
    const header = "Welcome to the Penguin Quest!";
    expect(screen.getByText(header)).toBeInTheDocument();
  });

  test("Renders all the link on navigation bar", () => {
    render(<App />);
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

  test("after API key is entered, clicking basic question goes to basic question page", () => {
    render(<App forceValidKey={true} />);
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

  test("after API key is entered, clicking detailed question goes to detailed question page", () => {
    render(<App forceValidKey={true} />);
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
    render(<App forceValidKey={true} />);
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

  test("Before API key is entered, navigation links do not work", () => {
    render(<App />);

    // Try to click "Basic Questions"
    const basicQuestionLink = screen.getByRole("button", {
      name: "Basic Questions",
    });

    // Click on basic question button on nav bar
    act(() => {
      basicQuestionLink.click();
    });

    // Try to click "Detailed Questions"
    const detailedQuestionLink = screen.getByRole("button", {
      name: "Detailed Questions",
    });
    act(() => {
      detailedQuestionLink.click();
    });

    // Assert that we are still on the home screen or API input screen
    expect(
      screen.getByText("Welcome to the Penguin Quest!")
    ).toBeInTheDocument();

    // Ensure no questions are shown
    expect(screen.queryByText("Basic Question 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Detailed Question 1")).not.toBeInTheDocument();
  });
});
