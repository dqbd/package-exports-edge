import { value } from "pkg";

export const config = { runtime: "edge" };

export default async function handler(request: Request) {
  return new Response(value);
}
