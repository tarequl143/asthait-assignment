import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Paragraph } from "./Paragraph";

it("Should have dynamic content passed via props", () => {
  render(<Paragraph content="paragraph text content" />);
  expect(screen.getByText("paragraph text content")).toHaveTextContent(
    "paragraph text content",
  );
});
