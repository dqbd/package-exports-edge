import { execa } from "execa";
import { expect, it } from "vitest";
import path from "path";

it("index.js", async () => {
  const result = await execa("bun", ["index.js"], {
    cwd: path.resolve(__dirname, "./app"),
  });

  expect(result.stdout).toBe("bun");
});

it("index.cjs", async () => {
  const result = await execa("bun", ["index.cjs"], {
    cwd: path.resolve(__dirname, "./app"),
  });

  expect(result.stdout).toBe("bun");
});

it("index.mjs", async () => {
  const result = await execa("bun", ["index.mjs"], {
    cwd: path.resolve(__dirname, "./app"),
  });

  expect(result.stdout).toBe("bun");
});
