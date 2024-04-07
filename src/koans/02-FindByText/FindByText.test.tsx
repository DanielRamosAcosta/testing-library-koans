import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FindByText } from "./FindByText.tsx";

describe(FindByText, () => {
  it("works", async () => {
    render(<FindByText />);

    const element = await screen.findByText("Hello World!");

    expect(element).toMatchKoan();
  });
});
