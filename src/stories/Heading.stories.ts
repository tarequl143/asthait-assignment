import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./../components/heading/Heading";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Heading",
  component: Heading,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const H1: Story = {
  args: {
    level: 1,
    color: "dark",
    title: "Heading one",
  },
};

export const H2: Story = {
  args: {
    level: 2,
    color: "dark",
    title: "Heading two",
  },
};

export const H3: Story = {
  args: {
    level: 3,
    color: "dark",
    title: "Heading three",
  },
};

export const H4: Story = {
  args: {
    level: 4,
    color: "dark",
    title: "Heading four",
  },
};

export const H5: Story = {
  args: {
    level: 5,
    color: "dark",
    title: "Heading five",
  },
};

export const H6: Story = {
  args: {
    level: 6,
    color: "dark",
    title: "Heading six",
  },
};
