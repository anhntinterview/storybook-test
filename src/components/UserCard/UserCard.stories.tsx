import { Meta, StoryObj } from "@storybook/nextjs";
import UserCard, { UserCardProps } from "./UserCard";

const meta: Meta<UserCardProps> = {
  title: "Components/UserCard",
  component: UserCard,
  tags: ["autodocs", "stable"],
  args: {
    id: "user001",
    name: "John Doe",
    email: "john@email.com",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
  },
};

export default meta;

export const Default: StoryObj<UserCardProps> = {
  args: {},
};

export const Clickable: StoryObj<UserCardProps> = {
  args: {
    name: "Mary Jane",
    email: "mary-jane@email.com",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
  },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector("button");
    button?.click();
  },
};
