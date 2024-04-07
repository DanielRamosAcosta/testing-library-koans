import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { GetByPlaceholder } from "./GetByPlaceholder.tsx";

describe(GetByPlaceholder, () => {
  it("works", () => {
    render(<GetByPlaceholder />);

    const element = screen.getByPlaceholderText("Your email");

    expect(element).toMatchKoan();
  });
});
