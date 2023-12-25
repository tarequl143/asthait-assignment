import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { IconCard } from "./IconCard";

it("Should have dynamic label and count value passed via props", () => {
  render(<IconCard title="Card title" text="card text" />);
  expect(screen.getByText("Card title")).toHaveTextContent("Card title");
  expect(screen.getByText("card text")).toHaveTextContent("card text");
});
