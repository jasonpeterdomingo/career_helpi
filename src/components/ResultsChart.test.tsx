import { render, screen } from "@testing-library/react";
import { ResultsChart } from "./ResultsChart";

const pieData = [
  { name: "Humanitarian", value: 77 },
  { name: "Innovator", value: 23 },
  { name: "Caretaker", value: 45 },
  { name: "Pragmatist", value: 56 },
];

const barData = [
  { category: "Building", score: 100 },
  { category: "Thinking", score: 78 },
  { category: "Creating", score: 76 },
  { category: "Helping", score: 63 },
  { category: "Persuading", score: 69 },
  { category: "Organizing", score: 69 },
];

/* 
Recharts depend on ResizeObserver (a brower API), so to test the charts, 
we add a mock for ResizeObserver
*/
beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe("ResultsChart Component", () => {
  beforeEach(() => {
    render(<ResultsChart pieData={pieData} barData={barData} fontSize={16} />);
  });

  test("Check that title of the two section (with chart diagram) of the result is there", () => {
    expect(screen.getByText("Work Style")).toBeInTheDocument();
    expect(screen.getByText("Work Activity Preferences")).toBeInTheDocument();
  });

  test("Check that the pie chart is there", () => {
    const pieChart = screen.getByTestId("pie-chart");
    expect(pieChart).toBeInTheDocument();
  });

  test("Check that the bar chart is there", () => {
    const barChart = screen.getByTestId("bar-chart");
    expect(barChart).toBeInTheDocument();
  });
});
