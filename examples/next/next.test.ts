import { beforeAll, expect, it } from "vitest";
import { fetchText, waitForStart } from "../../test/utils";
import path from "path";
import { load } from "cheerio";

beforeAll(() => waitForStart(path.resolve(__dirname, "./app"), 3000));

it("/api/pages-serverless", async () => {
  const res = await fetchText(3000, "/api/pages-serverless");
  expect(res).toBe("node");
});

it("/api/app-serverless", async () => {
  const res = await fetchText(3000, "/api/app-serverless");
  expect(res).toBe("node");
});

it("/api/pages-edge", async () => {
  const res = await fetchText(3000, "/api/pages-edge");
  expect(res).toBe("edge-light");
});

it("/api/app-edge", async () => {
  const res = await fetchText(3000, "/api/app-edge");
  expect(res).toBe("edge-light");
});

it("/", async () => {
  const $ = load(await fetchText(3000, "/"));
  expect($("body > div").text()).toBe("node");
});

it("/serverless", async () => {
  const $ = load(await fetchText(3000, "/serverless"));
  expect($("body > div").text()).toBe("node");
});
