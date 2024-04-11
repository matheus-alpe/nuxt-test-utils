import { setup, $fetch, createPage, url } from "@nuxt/test-utils/e2e";
import { test, expect, describe } from "vitest";

describe("app", async () => {
  await setup();

  test("contains number as string", async () => {
    const html = await $fetch("/");
    expect(html).toContain("Number:");
  });

  test("with playwright", async () => {
    const page = await createPage();
    await page.goto(url("/"), { waitUntil: "hydration" });

    const text = await page.textContent("span");
    const value = Number(text);
    expect(value).toBeGreaterThan(0);

    await page.click("button");
    const newText = await page.textContent("span");
    const newValue = Number(newText);
    expect(newValue).toBeGreaterThan(0);

    expect(value).not.toBe(newValue);
  });
});
