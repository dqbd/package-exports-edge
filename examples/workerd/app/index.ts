import { value } from "pkg";

export default {
  async fetch() {
    return new Response(value);
  },
};
