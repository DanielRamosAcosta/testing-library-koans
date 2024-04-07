import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { GetByText } from "./GetByText.tsx";

describe(GetByText, () => {
  it("works", () => {
    render(<GetByText />);

    const element = screen.getByText("Hello World!");

    expect(element).toMatchKoan();
  });
});
