import { render, screen } from "@testing-library/react";
import { Homepage } from "./Homepage";

const setup = (overrides = {}) =>
  render(
    <Homepage
      navigatePage={jest.fn()}
      fontSize={16}
      isValidKey={true}
      triggerWarning={jest.fn()}
      {...overrides}
    />
  );

test("Homepage renders without crashing", () => {
  setup();
});

// check if welcome message is rendered
test("Homepage welcome message displays", () => {
  setup();
  expect(
    screen.getByRole("heading", { name: /welcome to the penguin quest!/i })
  ).toBeInTheDocument();
});

// check if cards are displayed
test("renders Basic and Detailed question cards", () => {
  setup();
  expect(screen.getByTestId("basic-card")).toBeInTheDocument();
  expect(screen.getByTestId("detailed-card")).toBeInTheDocument();
});

// check if font size is applied dynamically
test("correct font-sizes are applied based on props", () => {
  setup();
  const header = screen.getByRole("heading", {
    name: /welcome to the penguin quest!/i,
  });
  expect(header).toHaveStyle("font-size: 36px");

  const basicTitle = screen.getByText("Basic Questions");
  expect(basicTitle).toHaveStyle("font-size: 38px");
});

// verify functional basic-card click navigation
test("clicking Basic Q card navigates to basic page", () => {
  const navigate = jest.fn();
  setup();

  const basicCard = screen.getByTestId("basic-card");
  basicCard.click();

  expect(navigate).toHaveBeenCalledWith("basic");
});

// verify functional detailed-card click navigation
test("clicking detailed Q card navigates to detailed page", () => {
  const navigate = jest.fn();
  setup();

  const detailedCard = screen.getByTestId("detailed-card");
  detailedCard.click();

  expect(navigate).toHaveBeenCalledWith("detailed");
});
