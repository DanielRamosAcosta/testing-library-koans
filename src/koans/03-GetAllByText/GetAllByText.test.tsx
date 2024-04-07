import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { GetAllByText } from "./GetAllByText.tsx";

describe(GetAllByText, () => {
  it("works", () => {
    render(<GetAllByText />);

    const element = screen.getAllByText("Hello World!");

    expect(element).toMatchKoan();
  });
});
