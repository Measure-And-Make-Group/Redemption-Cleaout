/** @type {import('next').NextConfig} */
const isPreview = process.env.VERCEL_ENV === "preview";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://*.getjobber.com",
      "frame-src 'self' https://*.getjobber.com https://clienthub.getjobber.com",
      "form-action 'self' https://*.getjobber.com",
      "base-uri 'self'",
      "object-src 'none'",
    ].join("; "),
  },
];

if (isPreview) {
  securityHeaders.push({ key: "X-Robots-Tag", value: "noindex, nofollow" });
}

/**
 * Permanent redirects for the URLs retired in the two-pillar restructure.
 *
 * Six standalone service pages folded into the cleanouts pillar, so each one
 * points at its equivalent section anchor rather than the page top; the
 * who-we-serve tree and the two Rochester city pages were removed outright.
 * These are 301s (permanent: true) — do not downgrade them to temporary, and
 * do not delete them: they are what carries the old pages' ranking signal to
 * the new ones, and external links to them still exist.
 */
const legacyRedirects = [
  // Retired service pages → the cleanouts pillar.
  ["/services/estate-cleanouts", "/services/full-property-cleanouts"],
  ["/services/commercial-cleanouts", "/services/full-property-cleanouts"],
  ["/services/foreclosure-cleanouts", "/services/full-property-cleanouts"],
  ["/services/hoarding-cleanouts", "/services/full-property-cleanouts"],
  ["/services/move-out-cleanouts", "/services/full-property-cleanouts"],
  ["/services/residential-junk-removal", "/services/full-property-cleanouts"],
  // Light demolition became the demolition pillar.
  ["/services/light-demolition", "/services/demolition"],
  // City pages replaced by county coverage.
  ["/service-areas/rochester-mi", "/service-areas/oakland-county-mi/rochester-mi"],
  [
    "/service-areas/rochester-hills-mi",
    "/service-areas/oakland-county-mi/rochester-hills-mi",
  ],
  // Audience pages folded into the cleanouts pillar.
  ["/who-we-serve", "/services/full-property-cleanouts"],
  ["/who-we-serve/homeowners-and-families", "/services/full-property-cleanouts"],
  ["/who-we-serve/realtors", "/services/full-property-cleanouts"],
  ["/who-we-serve/estate-professionals", "/services/full-property-cleanouts"],
  ["/who-we-serve/property-managers", "/services/full-property-cleanouts"],
  ["/who-we-serve/investors", "/services/full-property-cleanouts"],
  ["/who-we-serve/commercial", "/services/full-property-cleanouts"],
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
