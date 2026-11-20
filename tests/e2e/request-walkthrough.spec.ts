import { test, expect } from "@playwright/test";

test("request-walkthrough page shows an honest Jobber fallback when unconfigured", async ({
  page,
}) => {
  await page.goto("/request-walkthrough");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    /get a free estimate/i,
  );
  await expect(page.getByRole("link", { name: "Text Photos" })).toHaveAttribute(
    "href",
    "sms:+12483219609",
  );
  await expect(page.locator("iframe")).toHaveCount(0);
  const phoneLinks = page.locator('a[href="tel:+12483219609"]');
  await expect(phoneLinks.first()).toBeVisible();
});

test("service detail page renders unique content and breadcrumbs", async ({ page }) => {
  await page.goto("/services/demolition");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/demolition/i);
  await expect(page.getByRole("navigation", { name: "Breadcrumb" })).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://redemptioncleanoutservices.com/services/demolition",
  );
});

test("county service-area pages exist and unknown areas 404", async ({ page }) => {
  await page.goto("/service-areas/oakland-county-mi");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/oakland county/i);

  const response = await page.goto("/service-areas/detroit-mi");
  expect(response?.status()).toBe(404);
});

test("retired service URLs redirect to the pillar page they were folded into", async ({
  page,
}) => {
  await page.goto("/services/estate-cleanouts");
  await expect(page).toHaveURL(/\/services\/full-property-cleanouts$/);

  await page.goto("/services/light-demolition");
  await expect(page).toHaveURL(/\/services\/demolition$/);

  await page.goto("/service-areas/rochester-mi");
  await expect(page).toHaveURL(/\/service-areas\/oakland-county-mi\/rochester-mi$/);
});
