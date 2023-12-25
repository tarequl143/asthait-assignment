import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./../components/button/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      options: ["medium", "large"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Medium: Story = {
  args: {
    label: "Button",
    size: "medium",
    variant: "primary",
  },
};

export const Large: Story = {
  args: {
    label: "Button",
    size: "large",
    variant: "primary",
  },
};

export const Primary: Story = {
  args: {
    label: "Button",
    size: "medium",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    size: "medium",
    variant: "secondary",
  },
};