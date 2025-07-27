import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import { describe, it, expect, vi } from "vitest";

describe("Button", () => {
  it("render with label", () => {
    render(<Button label="Click me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn();
    render(<Button label="Submit" onClick={onClick} />);
    await userEvent.click(screen.getByText("Submit"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies secondary variant styles", () => {
    render(<Button label="Secondary" variant="secondary" />);
    const btn = screen.getByRole("button");
    expect(btn.className).toMatch(/bg-gray-500/);
  });
});
