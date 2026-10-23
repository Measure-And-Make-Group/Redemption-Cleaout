# Analytics

## Stack

- **GA4** via `src/components/Analytics.tsx`, gated behind visitor consent
  (`src/components/ConsentBanner.tsx`). The GA script tags never load until
  a visitor clicks "Accept."
- **Google Tag Manager** — container `GTM-N5TDNDFQ`, injected by
  `Analytics.tsx` after consent, same gate as GA4. Google's `<noscript>`
  iframe is intentionally not installed (it would run for visitors who can
  never have consented). If GA4 is also configured inside the container,
  remove the direct GA4 tag above or one of the two, or pageviews will be
  counted twice. Consent-gated means the GTM Test/Preview tools only see the
  container after you accept the banner.
- **Search Console** — not wired into the codebase; verify the domain and
  submit `https://redemptioncleanoutservices.com/sitemap.xml` manually
  after launch (see `DEPLOYMENT.md`).
- **Google Ads conversion tracking** — not yet configured. Once a
  conversion action exists in Google Ads, add its tag the same way GA4 is
  added in `Analytics.tsx`, still gated by consent.
- **Call tracking** — not implemented. If a call-tracking number/service is
  adopted later, swap `business.phoneDisplay`/`phoneHref` in
  `src/content/business.ts` for the tracking number so every `tel:`/`sms:`
  link across the site updates from one place.
- **UTM persistence** — not implemented in this phase. Recommended
  approach if added: capture `utm_*` params into `sessionStorage` on first
  load and append them to the Jobber request-form URL as query params (most
  Jobber embeds pass query params through).

## Event catalog

Every event is defined in `src/lib/analytics.ts` as a typed union — this is
the single source of truth; do not fire an ad-hoc `gtag` call anywhere else
in the codebase.

| Event | Fires when | File |
|---|---|---|
| `click_call` | A call link/button is clicked | Header, MobileActionBar, CallToAction, JobberRequestForm fallback |
| `click_text` | A text link/button is clicked | MobileActionBar, CallToAction |
| `click_request_walkthrough` | A "Get a Free Estimate" CTA is clicked | Header, MobileActionBar, CallToAction |
| `jobber_form_view` | The Jobber embed renders (config present) | JobberRequestForm |
| `jobber_form_submit` | Not currently fired — see JOBBER_SETUP.md §4 | JobberRequestForm (reserved) |
| `view_service` | Reserved for a service page view — not yet fired automatically to avoid double-counting with GA4's own pageview | — |
| `click_leave_review` | The "Leave a Google Review" button is clicked | ReviewSection (fires once `NEXT_PUBLIC_GOOGLE_REVIEW_URL` is set) |
| `click_google_reviews` | The "See the Google listing" link is clicked | ReviewSection (fires once `NEXT_PUBLIC_GOOGLE_BUSINESS_URL` is set) |
| `download_guide` | Reserved for a future downloadable PDF guide | — |

`click_leave_review` is the one to watch once the Google Business Profile is
live — it measures whether the site actually feeds the review engine, which is
the stated plan for building review volume.

`view_service` and `download_guide` are defined but not yet fired, because the
underlying content doesn't exist yet — wire them up when it ships, using the
same `trackEvent()` helper. (`click_professional_partner` and `view_project`
were removed when the who-we-serve pages and per-project pages were retired.)

## Privacy rule

**Never** pass form field values, names, phone numbers, email addresses,
physical addresses, or uploaded-image data as event parameters. Every
`params` object in `AnalyticsEvent` (see `src/lib/analytics.ts`) is
restricted to non-PII context like `location` or `service` — keep it that
way when adding new events.
