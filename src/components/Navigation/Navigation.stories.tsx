import { Meta, StoryObj } from "@storybook/nextjs";
import Navigation from "./Navigation";

const meta: Meta = {
  title: "Components/Navigation",
  component: Navigation,
  tags: ["autodocs", "stable"],
  args: {},
};

export default meta;

export const Default: StoryObj = {
  args: {},
};
