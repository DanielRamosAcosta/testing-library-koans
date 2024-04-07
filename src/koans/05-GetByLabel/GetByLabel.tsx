import { KOAN_VALUE } from "../utils.ts";

export const GetByLabel = () => (
  <div>
    <form>
      <label htmlFor="email">Your email</label>
      <input id="email" type="text" data-koan={KOAN_VALUE} />
    </form>
  </div>
);
