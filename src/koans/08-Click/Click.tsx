import { KOAN_VALUE } from "../utils.ts";
import { useState } from "react";

export const Click = () => {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  return (
    <div>
      <button onClick={() => setHasBeenClicked(true)}>Click me!</button>
      <p data-koan={hasBeenClicked ? KOAN_VALUE : undefined}>Result</p>
    </div>
  );
};
