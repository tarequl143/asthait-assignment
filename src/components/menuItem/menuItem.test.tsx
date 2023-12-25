import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MenuItem } from "./MenuItem";

it("Should have dynamic label and URL passed via props", () => {
  render(<MenuItem label="Home" url="/" />);
  const link = screen.getByRole("link");
  expect(link).toHaveTextContent("Home");
  expect(link).toHaveAttribute("href", "/");
});
