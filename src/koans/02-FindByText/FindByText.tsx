import { useEffect, useState } from "react";
import { KOAN_VALUE } from "../utils.ts";

export const FindByText = () => {
  const [shouldShowHelloWorld, setShouldShowHelloWorld] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShouldShowHelloWorld(true);
    }, 200);
  }, []);

  return (
    <div>
      {!shouldShowHelloWorld && <p>Hello world is hidden! Wait a little</p>}
      {shouldShowHelloWorld && <p data-koan={KOAN_VALUE}>Hello World!</p>}
    </div>
  );
};
