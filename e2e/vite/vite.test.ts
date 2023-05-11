import { beforeAll, expect, it } from "vitest";
import { waitForStart } from "../../test/utils";
import path from "path";
import { Browser, chromium } from "playwright";

let browser: Browser | undefined;

beforeAll(() => waitForStart(path.resolve(__dirname, "./app"), 5173), 60_000);
beforeAll(async () => {
  browser = await chromium.launch({ headless: true });
  return () => browser?.close();
});

it("/", async () => {
  if (browser == null) throw new Error("browser is null");
  const page = await browser.newPage();
  await page.goto("http://localhost:5173");
  expect(await page.locator("body > div").innerText()).toBe("default");
});
