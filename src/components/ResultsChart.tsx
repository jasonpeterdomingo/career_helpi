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
      <div className="chart-wrapper">
        <div className="result-chart">
          <div className="quadrant top-left">
            <h3 className="title humanitarian">HUMANITARIAN</h3>
            <p className="desc">
              Driven to make the world a better place. Creative and imaginative
              in coming up with insightful solutions to meaningful problems.
            </p>
          </div>
          <div className="quadrant top-right">
            <h3 className="title innovator">INNOVATOR</h3>
            <p className="desc">
              Likes to solve complex, rational problems. Uses analytical skills
              to come up with innovative ways to improve logical systems.
            </p>
          </div>
          <div className="quadrant bottom-left">
            <h3 className="title caretaker">CARETAKER</h3>
            <p className="desc">
              Wants to be of service to others. Prefers to work within
              established institutions to find ways to maintain stability and
              security.
            </p>
          </div>
          <div className="quadrant bottom-right">
            <h3 className="title pragmatist">PRAGMATIST</h3>
            <p className="desc">
              Wants to ensure accuracy and efficiency. Enjoys working within
              established, logical systems to accomplish practical, real-world
              goals.
            </p>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="pie-chart chart-container">
          <h3 className="subheader">Work Style</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                dataKey="value"
                data={pieData}
                outerRadius={80}
                label={({ name }) => `${name[0]}`}
                labelLine={false}
              >
                {pieData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => {
                  const percent = ((value / 100) * 100).toFixed(0);
                  return [`${percent}%`];
                }}
              />
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
    </div>
  );
}
