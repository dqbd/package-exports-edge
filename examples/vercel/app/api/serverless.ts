import { value } from "pkg";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function (_: VercelRequest, response: VercelResponse) {
  response.send(value).end();
}
