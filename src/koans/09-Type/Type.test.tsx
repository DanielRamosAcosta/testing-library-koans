import { describe, expect, it } from "vitest";
import { userEvent } from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Type } from "./Type.tsx";

describe(Type, () => {
  it("works", async () => {
    const user = userEvent.setup();
    render(<Type />);

    await user.type(screen.getByLabelText("Type me!"), "Hello World!");

    expect(screen.getByText("Result")).toMatchKoan();
  });
});
