import { KOAN_VALUE } from "../utils.ts";

export const GetByPlaceholder = () => (
  <div>
    <form>
      <input
        id="email"
        type="text"
        data-koan={KOAN_VALUE}
        placeholder="Your email"
      />
    </form>
  </div>
);
