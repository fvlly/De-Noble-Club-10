import { it, describe, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import VisionCard from "../VisionCard";

// import  "@testing-library/jest-dom/matchers";

describe("Home page", () => {
  it("Should display VisionCrad", () => {
    render(<VisionCard title="vision" message="Hello testing" />);

    expect(screen.getByText(/Hello testing/i)).toBeInTheDocument();
  });
});
