import type { BusinessInfo } from "@/types/content";
import { resolveSiteUrl } from "@/lib/validation";

/**
 * Central business configuration. Do not hardcode business facts anywhere
 * else in the app — import from here.
 *
 * ADDRESS SAFETY RULE: publicAddressEnabled must stay false until leadership
 * confirms, in writing (see CONTENT_APPROVALS.md), that:
 *   1. Redemption permanently operates at this address
 *   2. Staff are present during published business hours
 *   3. Customers can visit the location
 *   4. Permanent signage is installed
 *   5. The address complies with Google Business Profile rules
 *
 * Internal-only record (not rendered while publicAddressEnabled is false):
 *   429 South Main Street, Rochester, MI 48307
 */
export const business: BusinessInfo = {
  name: "Redemption Cleanout Services",
  legalTagline: "Redeem your property. Reclaim your space.",
  founderName: "Dante Terracciano",
  phoneDisplay: "(248) 321-9609",
  phoneHref: "+12483219609",
  email: "Dante@redemptioncleanoutservices.com",
  primaryDomain: "redemptioncleanoutservices.com",
  instagramHandle: "@redemption_cleanoutservices",
  instagramUrl: "https://www.instagram.com/redemption_cleanoutservices",
  address: {
    publicAddressEnabled: false,
    street: "429 South Main Street",
    city: "Rochester",
    state: "MI",
    zip: "48307",
    publicAreaDescription: "Serves Metro Detroit",
  },
  serviceRegionSummary:
    "Macomb, Oakland, St. Clair, Wayne, Monroe, Washtenaw, and Livingston counties",
};

export const siteUrl = resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const jobberRequestFormUrl = process.env.NEXT_PUBLIC_JOBBER_REQUEST_FORM_URL ?? "";
export const jobberEmbedUrl = process.env.NEXT_PUBLIC_JOBBER_EMBED_URL ?? "";
export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
// Public container ID (not a secret). Defaults to the live container so the
// site works without extra Vercel configuration; override per environment.
export const gtmContainerId = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-N5TDNDFQ";
export const googleReviewUrl = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ?? "";
export const googleBusinessUrl = process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL ?? "";

export function formatPhoneTelHref(): string {
  return `tel:${business.phoneHref}`;
}

export function formatPhoneSmsHref(): string {
  return `sms:${business.phoneHref}`;
}

export function formatEmailHref(): string {
  return `mailto:${business.email}`;
}
