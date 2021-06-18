import React from "react";
import { render, screen } from "@testing-library/react";
import ColorList from "./ColorList";
const noColorsList = [
  {
    code: {
      hex: "",
    },
    color: "",
    id: "",
  },
];

const colorsList = [
  {
    code: {
      hex: "#f0f8ff",
    },
    color: "aliceblue",
    id: "1",
  },
  {
    code: {
      hex: "#d44f0c",
    },
    color: "orange",
    id: "2",
  },
];

test("Renders an empty list of colors without errors", () => {
  render(<ColorList colors={noColorsList} />);
});

test("Renders a list of colors without errors", () => {
  render(<ColorList colors={colorsList} />);
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
  const { rerender } = render(<ColorList colors={colorsList} editing={true} />);
  const editMenu = screen.queryByTestId("editMenu");
  expect(editMenu).toBeTruthy();

  rerender(<ColorList colors={colorsList} editing={false} />);
  expect(editMenu).not.toBeInTheDocument();
});
