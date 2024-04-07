import { KOAN_VALUE } from "../utils.ts";

export const GetIconByLabel = () => (
  <div>
    <form>
      <button data-koan={KOAN_VALUE} aria-label="Delete">
        <img src="https://example.com/delete.png" alt="" />
      </button>
    </form>
  </div>
);
