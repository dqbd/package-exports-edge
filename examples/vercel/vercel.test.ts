import { beforeAll, expect, it } from "vitest";
import { fetchText, waitForStart } from "../../test/utils";
import path from "path";

beforeAll(() => waitForStart(path.resolve(__dirname, "./app"), 3001), 60_000);

it("/api/edge", async () => {
  const res = await fetchText(3001, "/api/edge");
  expect(res).toBe("default");
});

it("/api/serverless", async () => {
  const res = await fetchText(3001, "/api/serverless");
  expect(res).toBe("node");
});
