import { render, screen } from "@testing-library/react";
import { DisplayBasicQuestions } from "./DisplayBasicQuestions";
import { BASIC_QUESTIONS } from "../../data/questions";

describe("DisplayBasicQuestion Component", () => {
  beforeEach(() => {
    render(
      <DisplayBasicQuestions
        fontSize={16}
        onFinishQuiz={jest.fn()}
        initialAnswers={{}}
      />
    );
  });

  test("Check that title and first question appears", () => {
    expect(screen.getByText("Basic Question 1")).toBeInTheDocument();
    // Check if basic question prompt is displayed
    expect(screen.getByText(BASIC_QUESTIONS[0].body)).toBeInTheDocument();
  });

  test("Check for that the buttons (Clear, Next, Back) appears", () => {
    const nextButton = screen.getByRole("button", { name: "Next Button" });
    const backButton = screen.getByRole("button", { name: "Back Button" });
    const clearButton = screen.getByRole("button", { name: "Clear" });
    expect(nextButton).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
    expect(clearButton).toBeInTheDocument();
  });
});
