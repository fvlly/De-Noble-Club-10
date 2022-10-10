import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Header from "./Header";

describe("#Header", () => {
  it("Links should point to correct page", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // screen.debug()
    const link = screen.getByRole("link", { name: /About/i });
    screen.debug(link);

    userEvent.click(link);

    expect(
      screen.getByRole("heading", { name: /About us/i })
    ).toBeInTheDocument();
  });
});
