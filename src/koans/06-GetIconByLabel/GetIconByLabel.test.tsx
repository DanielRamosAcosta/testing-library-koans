import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { GetIconByLabel } from "./GetIconByLabel.tsx";

describe(GetIconByLabel, () => {
  it("works", () => {
    render(<GetIconByLabel />);

    const element = screen.getByLabelText("Delete");

    expect(element).toMatchKoan();
  });
});
