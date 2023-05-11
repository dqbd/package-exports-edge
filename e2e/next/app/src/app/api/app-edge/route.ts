import { value } from "pkg";

export const config = { runtime: "edge" };

export async function GET(request: Request) {
  return new Response(value);
}
