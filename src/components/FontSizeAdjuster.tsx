import React from "react";
import { Button } from "react-bootstrap";
import "./cssStyling/Components.css";

interface FontSizeAdjusterProps {
  fontSize: number;
  setFontSize: (size: number) => void;
}

/**
 * FontSizeAdjuster Component
 *
 * Allows users to adjust the font size of the text on the page.
 * There's 4 predefined font sizes: Small, Medium, Large, and Extra Large.
 * When a button is clicked, the font size of the content is updated based on the selected size.
 *
 * Props:
 * - `setFontSize` (function): A function that updates the font size state in the parent component.
 *    The function takes in a number as an argument, which represents the desired font size.
 *
 */
export function FontSizeAdjuster({
  fontSize,
  setFontSize,
}: FontSizeAdjusterProps): JSX.Element {
  return (
    <div className="font-size-toggle">
      <span className="font-size-label">Font size:</span>
      <Button
        className={fontSize === 12 ? "active" : ""}
        variant="custom"
        onClick={() => setFontSize(12)}
        style={{ marginRight: "10px", fontSize: "12px" }}
      >
        Small
      </Button>
      <Button
        className={fontSize === 16 ? "active" : ""}
        variant="custom"
        onClick={() => setFontSize(16)}
        style={{ marginRight: "10px", fontSize: "16px" }}
      >
        Medium
      </Button>
      <Button
        className={fontSize === 20 ? "active" : ""}
        variant="custom"
        onClick={() => setFontSize(20)}
        style={{ marginRight: "10px", fontSize: "20px" }}
      >
        Large
      </Button>
      <Button
        className={fontSize === 24 ? "active" : ""}
        variant="custom"
        onClick={() => setFontSize(24)}
        style={{ marginRight: "10px", fontSize: "24px" }}
      >
        Extra Large
      </Button>
    </div>
  );
}
