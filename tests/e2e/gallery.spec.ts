import { test, expect } from "@playwright/test";

test("projects page renders the Before & After gallery", async ({ page }) => {
  await page.goto("/projects");
  await expect(
    page.getByRole("heading", { level: 1, name: /before & after/i }),
  ).toBeVisible();

  const main = page.locator("main");
  expect(await main.locator("img").count()).toBeGreaterThan(10);
  expect(await main.getByText("Before", { exact: true }).count()).toBeGreaterThan(0);
  expect(await main.getByText("After", { exact: true }).count()).toBeGreaterThan(0);
  await expect(main.getByText(/photographs from/i)).toHaveCount(0);
  await expect(main.getByText(/select any photo/i)).toHaveCount(0);
});

test("reduced motion is respected on the homepage", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const prefersReducedMotion = await page.evaluate(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  expect(prefersReducedMotion).toBe(true);

  // Global CSS (globals.css) forces near-zero animation/transition duration
  // whenever this media query matches — confirm it actually applies.
  const scrollBehavior = await page.evaluate(
    () => getComputedStyle(document.documentElement).scrollBehavior,
  );
  expect(scrollBehavior).toBe("auto");
});

test("the hero and project photography are revealed with motion enabled", async ({
  page,
}) => {
  await page.goto("/");
  const hero = page.getByRole("img", { name: /truck and dump trailer onsite/i });
  await expect(hero).toBeVisible();

  const project = page.getByRole("link", { name: /^Before: Furniture, tarps/ });
  await project.scrollIntoViewIfNeeded();
  await expect(project).toHaveCSS("clip-path", "inset(0px)");
});
