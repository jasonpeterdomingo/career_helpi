import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../components/cssStyling/Results.css";

const COLORS = ["#FF8C00", "#6A0DAD", "#1E90FF", "#3CB371"];

/**
 * ResultsChart Component
 *
 * This component visually presents assessment results using two types of charts:
 * a pie chart to represent work style distribution, and a bar chart to show
 * career interest scores.
 *
 * Props:
 * - `pieData` (Array<{ name: string; value: number }>): Data representing proportions
 *    for the pie chart, where `name` is the label and `value` is the numerical portion.
 * - `barData` (Array<{ category: string; score: number }>): Data representing career interest
 *    scores for the bar chart, where `category` is the interest area and `score` is the percentage.
 *
 */
export function ResultsChart({
  pieData,
  barData,
}: {
  pieData: {
    name: string;
    value: number;
  }[];
  barData: {
    category: string;
    score: number;
  }[];
}) {
  return (
    <div>
      {/* Pie Chart */}
      <div className="pie-chart chart-container">
        <h3>Work Style</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              dataKey="value"
              data={pieData}
              outerRadius={80}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {pieData.map(
                (
                  _,
                  index // We only need the index, so we use _
                ) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                )
              )}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bar-chart chart-container">
        <h3>Work Activity Preferences</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData} layout="vertical">
            <XAxis type="number" domain={[0, 100]} />
            <YAxis type="category" dataKey="category" width={100} />
            <Tooltip />
            <Bar dataKey="score" fill="#4B9CD3" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
