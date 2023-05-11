import { execa } from "execa";
import { expect, it } from "vitest";
import path from "path";

it("index.js", async () => {
  const result = await execa("node", ["index.js"], {
    cwd: path.resolve(__dirname, "./app"),
  });

  expect(result.stdout).toBe("node");
});

it("index.cjs", async () => {
  const result = await execa("node", ["index.cjs"], {
    cwd: path.resolve(__dirname, "./app"),
  });

  expect(result.stdout).toBe("node");
});

it("index.mjs", async () => {
  const result = await execa("node", ["index.mjs"], {
    cwd: path.resolve(__dirname, "./app"),
  });

  expect(result.stdout).toBe("node");
});
