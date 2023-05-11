import { value } from "pkg";
export const config = { runtime: "edge" };

export default async function (req: Request) {
  return new Response(value);
}
