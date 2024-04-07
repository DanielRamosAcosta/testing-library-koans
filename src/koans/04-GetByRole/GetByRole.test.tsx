import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { GetByRole } from "./GetByRole.tsx";

describe(GetByRole, () => {
  it("works", () => {
    render(<GetByRole />);

    const element = screen.getByRole("button", { name: /submit/i });

    expect(element).toMatchKoan();
  });
});
