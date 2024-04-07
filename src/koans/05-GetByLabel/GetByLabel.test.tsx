import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { GetByLabel } from "./GetByLabel.tsx";

describe(GetByLabel, () => {
  it("works", () => {
    render(<GetByLabel />);

    const element = screen.getByLabelText("Your email");

    expect(element).toMatchKoan();
  });
});
