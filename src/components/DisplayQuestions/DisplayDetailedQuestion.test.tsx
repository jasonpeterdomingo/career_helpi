import { render, screen } from "@testing-library/react";
import { DisplayDetailedQuestions } from "./DisplayDetailedQuestions";
import { DETAILED_QUESTIONS } from "../../data/questions";

describe("DisplayDetailedQuestions Component", () => {
  beforeEach(() => {
    render(
      <DisplayDetailedQuestions
        fontSize={16}
        onFinishQuiz={jest.fn()}
        initialAnswers={{}}
      />
    );
  });

  test("Check that title and first question appears", () => {
    expect(screen.getByText("Detailed Question 1")).toBeInTheDocument();
    // Check if detailed question prompt is displayed
    expect(screen.getByText(DETAILED_QUESTIONS[0].body)).toBeInTheDocument();
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
