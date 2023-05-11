import { beforeAll, expect, it } from "vitest";
import { fetchText, waitForStart } from "../../test/utils";
import path from "path";

beforeAll(() => waitForStart(path.resolve(__dirname, "./app"), 8888), 60_000);

it("/.netlify/functions/serverless", async () => {
  const res = await fetchText(8888, "/.netlify/functions/serverless");
  expect(res).toBe("node");
});
