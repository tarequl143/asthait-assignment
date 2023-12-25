import type { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "./../components/menuItem/MenuItem";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/MenuItem",
  component: MenuItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    hasSubMenu: { controls: "boolean" },
  },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithoutSubMenu: Story = {
  args: {
    label: "Menu Link",
    hasSubMenu: false,
    url: "/",
  },
};

export const WithSubMenu: Story = {
  args: {
    label: "Menu Link",
    hasSubMenu: true,
    url: "/",
  },
};
