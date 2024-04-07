import { KOAN_VALUE } from "../utils.ts";
import { useState } from "react";

export const Hover = () => {
  const [hasHover, setHasHover] = useState(false);

  return (
    <div>
      <button onMouseEnter={() => setHasHover(true)}>Hover me!</button>
      <p data-koan={hasHover ? KOAN_VALUE : undefined}>Result</p>
    </div>
  );
};
