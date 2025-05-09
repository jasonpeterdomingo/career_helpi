import React from "react";
import { Dropdown } from "react-bootstrap";
import { GearFill } from "react-bootstrap-icons";
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
      <Dropdown align="end" autoClose="outside">
        <Dropdown.Toggle
          variant="link"
          id="dropdown-settings"
          className="settings-dropdown-toggle"
          title="Change font size setting"
          aria-label="Change font size setting" /* Screen reader reads the gear button */
        >
          <GearFill className="custom-gear" size={26} />
        </Dropdown.Toggle>

        <Dropdown.Menu className="settings-dropdown-menu">
          <div className="font-size-dropdown">
            <div className="font-size-label">Font size:</div>
            <Dropdown.Item
              className={fontSize === 12 ? "active" : ""}
              active={fontSize === 12}
              onClick={() => setFontSize(12)}
              style={{ fontSize: "14px", margin: "4px" }}
            >
              Small
            </Dropdown.Item>
            <Dropdown.Item
              className={fontSize === 16 ? "active" : ""}
              active={fontSize === 16}
              onClick={() => setFontSize(16)}
              style={{ fontSize: "16px", margin: "4px" }}
            >
              Medium
            </Dropdown.Item>
            <Dropdown.Item
              className={fontSize === 20 ? "active" : ""}
              active={fontSize === 20}
              onClick={() => setFontSize(20)}
              style={{ fontSize: "17.5px", margin: "4px" }}
            >
              Large
            </Dropdown.Item>
            <Dropdown.Item
              className={fontSize === 24 ? "active" : ""}
              active={fontSize === 24}
              onClick={() => setFontSize(24)}
              style={{ fontSize: "18px", margin: "4px" }}
            >
              Extra Large
            </Dropdown.Item>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
