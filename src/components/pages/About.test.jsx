import { describe, it, expect } from "vitest";
import {  render, screen } from "@testing-library/react";

import About from "./About";

describe("About page", () => {
  it("heading should be in the dom", () => {
    render(<About />);

    expect(
        screen.getByRole('heading', { name: /About us/i })).toBeInTheDocument();
  });
});
