import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "./../components/paragraph/Paragraph";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Paragraph",
  component: Paragraph,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Large: Story = {
  args: {
    content: "This is paragraph content",
    color: "dark",
    size: "lg",
  },
};

export const Medium: Story = {
  args: {
    content: "This is paragraph content",
    color: "dark",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    content: "This is paragraph content",
    color: "dark",
    size: "sm",
  },
};
