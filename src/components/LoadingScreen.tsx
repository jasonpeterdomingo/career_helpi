import { useEffect, useState } from "react";
import "./cssStyling/LoadingScreen.css";

const messages = [
  "Analyzing your answers...",
  "Matching your preferences with careers...",
  "Generating your personalized report...",
];

/**
 * LoadingScreen Component
 *
 * This component displays a loading screen with a snowflake animation and rotating messages.
 * It is used to indicate that the application is processing data or generating results.
 *
 * Returns:
 * - A TSX element representing the loading screen.
 */
export function LoadingScreen() {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 2500); // Change message every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    // Used ChatGPT to generate the CSS for the snowflake animation
    <div className="loading-overlay">
      <div className="snowflakes" aria-hidden="true">
        {/* aria-hidden is used to hide the snowflakes from screen readers */}
        <div className="snowflakes" aria-hidden="true">
          {/* Snowflakes with randomized fall speeds and starting positions are generated using a loop */}
          {[...Array(20)].map((_, i) => {
            const style = {
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            };
            return (
              <div key={i} className="snowflake" style={style}>
                ❄️
              </div>
            );
          })}
        </div>
      </div>
      <div className="loading-content">
        <h2>{messages[currentMessage]}</h2>
      </div>
    </div>
  );
}
