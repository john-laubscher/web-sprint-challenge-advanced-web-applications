import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from "./Color";

const testColor = {
  code: {
    hex: "#f0f8ff",
  },
  color: "aliceblue",
  id: "1",
};

test("Renders without errors with blank color passed into component", () => {
  render(<Color color={testColor} />);
});

test("Renders the color passed into component", () => {
  render(<Color color={testColor} />);

  const elementTest = screen.getByText(/aliceblue/i);
  expect(elementTest).toBeInTheDocument();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
  const deleteColor = jest.fn();
  const toggleEdit = jest.fn();
  render(<Color color={testColor} toggleEdit={toggleEdit} deleteColor={deleteColor} />);

  const handleDelete = screen.queryByTestId(/delete/i);
  userEvent.click(handleDelete);

  expect(deleteColor).toBeCalled();
  expect(toggleEdit).toBeCalled();
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
  const setEditColor = jest.fn();
  const toggleEdit = jest.fn();

  render(<Color color={testColor} toggleEdit={toggleEdit} setEditColor={setEditColor} />);

  const handleEdit = screen.queryByTestId(/color/i);
  userEvent.click(handleEdit);

  expect(setEditColor).toBeCalled();
  expect(toggleEdit).toBeCalled();
});
