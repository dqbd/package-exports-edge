import { value } from "pkg";

export async function GET(request: Request) {
  return new Response(value);
}
