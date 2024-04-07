import { KOAN_VALUE } from "../utils.ts";

export const GetByRole = () => (
  <div>
    <form>
      <input type="submit" data-koan={KOAN_VALUE} />
    </form>
  </div>
);
