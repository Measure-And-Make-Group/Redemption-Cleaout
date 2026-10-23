import { describe, expect, it } from "vitest";
import { business } from "@/content/business";

describe("business config address safety rule", () => {
  it("keeps publicAddressEnabled false by default", () => {
    expect(business.address.publicAddressEnabled).toBe(false);
  });

  it("exposes only the safe public area description while disabled", () => {
    expect(business.address.publicAreaDescription).toBe("Serves Metro Detroit");
    // The point of the rule: whatever the wording, it must never leak the
    // street address or the unit-level location.
    expect(business.address.publicAreaDescription).not.toContain(business.address.street);
    expect(business.address.publicAreaDescription).not.toContain(business.address.zip);
  });

  it("retains the internal street address for later activation, without publishing it", () => {
    expect(business.address.street).toBe("429 South Main Street");
  });
});

describe("published business email", () => {
  it("sits on the primary domain", () => {
    // The Google login supplied for this business was at the singular
    // "redemptioncleanoutservice.com". The site serves the plural domain, and
    // an address on the wrong one would bounce silently.
    expect(business.email.toLowerCase()).toContain(`@${business.primaryDomain}`);
  });

  it("is a single address, not a list or a display name", () => {
    expect(business.email).not.toMatch(/[,;<>\s]/);
  });
});
