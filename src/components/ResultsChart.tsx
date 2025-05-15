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
 * -  `fontSize` (number): The font size.
 *
 */
export function ResultsChart({
  pieData,
  barData,
  fontSize,
}: {
  pieData: {
    name: string;
    value: number;
  }[];
  barData: {
    category: string;
    score: number;
  }[];
  fontSize: number;
}) {
  return (
    <div>
      <div className="pie-chart-wrapper">
        <div className="work-style-description">
          <div
            className="quadrant top-left"
            style={{ fontSize: `${fontSize}px` }}
          >
            <h3
              className="title humanitarian"
              style={{ fontSize: `${fontSize + 2}px` }}
            >
              HUMANITARIAN
            </h3>
            <p>
              Driven to make the world a better place. Creative and imaginative
              in coming up with insightful solutions to meaningful problems.
            </p>
          </div>
          <div
            className="quadrant top-right"
            style={{ fontSize: `${fontSize}px` }}
          >
            <h3
              className="title innovator"
              style={{
                fontSize: `${fontSize + 2}px`,
              }}
            >
              INNOVATOR
            </h3>
            <p>
              Likes to solve complex, rational problems. Uses analytical skills
              to come up with innovative ways to improve logical systems.
            </p>
          </div>
          <div
            className="quadrant bottom-left"
            style={{ fontSize: `${fontSize}px` }}
          >
            <h3
              className="title caretaker"
              style={{ fontSize: `${fontSize + 2}px` }}
            >
              CARETAKER
            </h3>
            <p>
              Wants to be of service to others. Prefers to work within
              established institutions to find ways to maintain stability and
              security.
            </p>
          </div>
          <div
            className="quadrant bottom-right"
            style={{ fontSize: `${fontSize}px` }}
          >
            <h3
              className="title pragmatist"
              style={{ fontSize: `${fontSize + 2}px` }}
            >
              PRAGMATIST
            </h3>
            <p>
              Wants to ensure accuracy and efficiency. Enjoys working within
              established, logical systems to accomplish practical, real-world
              goals.
            </p>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="pie-chart">
          <h3 style={{ fontSize: `${fontSize + 17}px` }}>Work Style</h3>
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
      </div>

      {/* Bar Chart */}
      <div className="bar-chart-wrapper">
        <div className="bar-chart chart-container">
          <h3 style={{ fontSize: `${fontSize + 17}px` }}>
            Work Activity Preferences
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData} layout="vertical">
              <XAxis type="number" domain={[0, 100]} />
              <YAxis type="category" dataKey="category" width={100} />
              <Tooltip />
              <Bar dataKey="score" fill="#4B9CD3" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div
          className="interest-description"
          style={{ fontSize: `${fontSize}px` }}
        >
          <div className="interest-item">
            <h3 style={{ fontSize: `${fontSize + 2}px` }}>Building</h3>
            <p>
              Waddle over here if you love getting your flippers dirty! Builders
              thrive on hands-on work, whether it's with tools, nature, or
              animals. If you like crafting, building, and working outdoors,
              you’re in your element!
            </p>
          </div>
          <div className="interest-item">
            <h3 style={{ fontSize: `${fontSize + 2}px` }}>Thinking</h3>
            <p>
              Need a little brain freeze? Thinkers dive deep into ideas,
              research, and the world of intellect. If you’re into solving
              problems and discovering new things, you’ll feel right at home!
            </p>
          </div>

          <div className="interest-item">
            <h3 style={{ fontSize: `${fontSize + 2}px` }}>Creating</h3>
            <p>
              Got a flair for the artistic side? Creators excel in turning ideas
              into reality. Whether it’s painting, designing, or telling
              stories, you’ll love bringing something unique to life!
            </p>
          </div>

          <div className="interest-item">
            <h3 style={{ fontSize: `${fontSize + 2}px` }}>Helping</h3>
            <p>
              Got a heart of gold? Helpers are all about making life better for
              others. Whether it’s teaching, coaching, or lending a flipper,
              you’ll love working in teams to support people and communities.
            </p>
          </div>

          <div className="interest-item">
            <h3 style={{ fontSize: `${fontSize + 2}px` }}>Persuading</h3>
            <p>
              If leading the way is your thing, Persuaders thrive in positions
              where they can influence, motivate, and guide others. Power,
              decisions, and driving projects—that’s what you’re all about!
            </p>
          </div>

          <div className="interest-item">
            <h3 style={{ fontSize: `${fontSize + 2}px` }}>Organizing</h3>
            <p>
              Like things neat and tidy? Organizers are the masters of structure
              and precision. If you’re a planner who loves keeping things on
              track and making sure everything’s in order, this is your zone!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
