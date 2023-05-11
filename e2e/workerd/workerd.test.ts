import { beforeAll, expect, it } from "vitest";
import { fetchText, waitForStart } from "../../test/utils";
import path from "path";

beforeAll(() => waitForStart(path.resolve(__dirname, "./app"), 8787), 60_000);

it("/", async () => {
  const res = await fetchText(8787, "/");
  expect(res).toBe("workerd");
});
