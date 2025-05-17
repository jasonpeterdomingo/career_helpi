import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Homepage } from "./Homepage";

const setup = (overrides = {}) => {
  const defaultProps = {
    navigatePage: jest.fn(),
    fontSize: 16,
    isValidKey: true,
    triggerWarning: jest.fn(),
  };

  return {
    ...render(<Homepage {...defaultProps} {...overrides} />),
    navigate: defaultProps.navigatePage,
  };
};

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
  expect(header).toHaveStyle("font-size: 32px");

  const basicTitle = screen.getByText("Basic Questions");
  expect(basicTitle).toHaveStyle("font-size: 34px");
});

// verify functional basic-card click navigation
test("clicking Basic Q card navigates to basic page", () => {
  const navigate = jest.fn();
  setup({ navigatePage: navigate }); // ChatGPT was used to debug this test

  const basicCard = screen.getByTestId("basic-card");
  userEvent.click(basicCard);

  expect(navigate).toHaveBeenCalledWith("basic");
});

// verify functional detailed-card click navigation
test("clicking detailed Q card navigates to detailed page", () => {
  const navigate = jest.fn();
  setup({ navigatePage: navigate });

  const detailedCard = screen.getByTestId("detailed-card");
  userEvent.click(detailedCard);

  expect(navigate).toHaveBeenCalledWith("detailed");
});
