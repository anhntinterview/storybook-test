import { Meta, StoryObj } from "@storybook/nextjs";
import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    label: "Click Me",
    variant: "primary",
  },
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
  },
};
