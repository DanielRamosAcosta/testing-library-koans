import { KOAN_VALUE } from "../utils.ts";
import { useState } from "react";

export const Type = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <label htmlFor="example">Type me!</label>
      <input
        id="example"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p data-koan={value === "Hello World!" ? KOAN_VALUE : undefined}>
        Result
      </p>
    </div>
  );
};
