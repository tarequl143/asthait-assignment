import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

it("Should have dynamic label and count value passed via props", () => {
  render(<Counter label="countries" count="150+" />);
  expect(screen.getByText("countries")).toHaveTextContent("countries");
  expect(screen.getByText("150+")).toHaveTextContent("150+");
});
