import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

it("Should have dynamic label passed via props", () => {
  render(<Button label="Button label" />);
  expect(screen.getByRole("button")).toHaveTextContent("Button label");
});
