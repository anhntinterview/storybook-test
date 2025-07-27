// src/components/UserCard/UserCard.test.tsx
import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";
import { describe, it, expect, vi } from "vitest";
import type { ImgHTMLAttributes } from "react";

// next/image mock
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: ImgHTMLAttributes<HTMLImageElement>) => {
    return <img {...props} />;
  },
}));

describe("UserCard", () => {
  it("renders user info correctly", () => {
    render(
      <UserCard
        id="u1"
        name="Jane Doe"
        email="jane@example.com"
        avatarUrl="https://i.pravatar.cc/150?img=3"
      />
    );

    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("jane@example.com")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://i.pravatar.cc/150?img=3"
    );
  });
});
