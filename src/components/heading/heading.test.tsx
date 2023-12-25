import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";

it("Should have dynamic title passed via props", () => {
  render(<Heading title="heading one" level={1} />);
  expect(screen.getByRole("heading")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent("heading one");
});
