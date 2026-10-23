# Google Business Profile — Configuration Pack

Everything needed to bring the Google Business Profile in line with the site,
field by field, ready to paste. Every value here is pulled from this repo —
`src/content/business.ts`, `src/content/services.ts`,
`src/content/serviceAreas.ts`, `src/content/gallery.ts` — not written fresh.
Where the repo and the request that prompted this file disagree, the repo wins
and the difference is flagged under **Conflicts to resolve**.

Companion document: `LOCAL_SEO_PLAYBOOK.md` (Priority 1 covers profile
creation; this file is the field-level detail).

> **Update, 2026-10-23.** This pack was written on 2026-09-01 and two of its
> flags have since been settled on the site:
>
> - **Tagline:** the client's September 21 update made the site's tagline
>   "Redeem your property. Reclaim your space." (`business.legalTagline`).
>   Conflict 1 below is superseded: use that wording on the profile.
> - **Business email:** `Dante@redemptioncleanoutservices.com` is confirmed and
>   published on the site, so the "Business email" row near the end no longer
>   applies. Enter it on the profile.
>
> The 12-vs-13-years question is still open; the site says 13.

---

## Conflicts to resolve before applying

Five things in the brief that prompted this pack do not match the current
codebase. Each one is a decision, not a typo — read these first.

### 1. Tagline: "Redeem Your Space", not "Reclaim Your Space"

The brief asked for *"Redeem Your Property. Reclaim Your Space."*

The approved slogan is **"Redeem Your Property. Redeem Your Space."**
`CONTENT_APPROVALS.md` records this as a signed-off decision: the client set
this slogan and it explicitly *"replaces the brochure's '…Reclaim Your
Space.'"* It is `business.legalTagline` and the home-page H1
(`src/components/sections/Hero.tsx`).

"Reclaim" survives only in older prose inside `PROJECT_SUMMARY.md` (lines 273,
439, 1272), which predates the decision and is stale on this point.

**Use "Redeem Your Property. Redeem Your Space."** unless Dante has since
reversed it — in which case `business.ts`, the Hero, and `CONTENT_APPROVALS.md`
all need updating together, not just the profile.

### 2. There should be no existing profile to fix

The brief describes an existing listing set up under a demolition-only
category. `LOCAL_SEO_PLAYBOOK.md` states plainly that there is **no Google
Business Profile at all**, and calls that the single biggest gap.
`CONTENT_APPROVALS.md` corroborates: both `NEXT_PUBLIC_GOOGLE_REVIEW_URL` and
`NEXT_PUBLIC_GOOGLE_BUSINESS_URL` are unset, and past clients who agreed to
leave reviews *"have nowhere to leave them."*

Either a profile was created after those docs were last written, or the listing
in question is an unclaimed/auto-generated entry, or a duplicate. **Check which
before editing anything** — editing a duplicate instead of claiming the real one
creates two competing listings, which is worse than one wrong one. If two exist,
claim both and ask Google to merge; never leave a duplicate live.

### 3. "Light Demolition & Site Preparation" is retired wording

The brief lists this as a supporting service. The site deliberately moved away
from it. `CONTENT_APPROVALS.md`: *"The client asked for demolition to be
promoted from 'light demolition' to a full service ('currently taking on larger
projects')."* `src/content/services.ts` now advertises interior gut-outs,
garages, decks, sheds, pole barns, concrete removal, and **full structure
teardowns**. The old `/services/light-demolition` URL is 301'd away in
`next.config.mjs`.

Listing "light demolition" on the profile would undersell the service line the
business is actively trying to grow, and would contradict the site Google
cross-checks against. **Use the demolition service names in section 5 instead.**

### 4. Service area is seven named counties, not "Michigan"

The brief says Michigan. The confirmed area (`CONTENT_APPROVALS.md`, marked
approved) is seven counties — listed in section 3. Setting the area to the whole
state is both inaccurate and actively harmful: it dilutes local relevance across
regions the business does not serve.

### 5. Business-name domain mismatch (worth a look)

The site's domain is `redemptioncleanoutservices.com` (plural "services", per
`business.primaryDomain`). The Google login address supplied for this work was
at `redemptioncleanoutservice.com` — singular. If both domains are owned, fine;
if the singular one is a typo, the profile's website field must still point at
the plural domain, which is what the site actually serves.

---

## 1. Categories — the core fix

The site sells exactly two things (`src/content/services.ts`): full property
cleanouts and demolition. The categories must reflect both, weighted toward
cleanouts.

| Slot | Category | Why |
|---|---|---|
| **Primary** | **Junk removal service** | The standard Google match for full-property cleanout work, which is the larger service line — six of the site's service categories sit under cleanouts versus one demolition pillar. |
| **Additional** | **Demolition contractor** | Covers the demolition line: gut-outs, teardowns, outbuildings, concrete. |

This matches `LOCAL_SEO_PLAYBOOK.md` Priority 1 exactly.

**Ambiguity to check in the picker — flagging as requested.** Google renames and
reshuffles categories, and the live picker is the only authority. When you open
it, type "junk" and "demolition" and check what actually appears. Two judgment
calls:

- **"Junk removal service" vs "Waste management service."** Prefer *Junk
  removal service*. "Waste management service" skews toward dumpster rental,
  hauling contracts, and disposal facilities — searchers using it are often
  looking to rent a container, not hire a crew. Redemption sends a crew.
- **Do not add a third category speculatively.** The playbook is explicit:
  *"Do not bolt on categories for work Redemption does not do. Extra categories
  dilute relevance and invite a suspension if the work isn't real."* If you see
  something like "Garbage collection service" or "Debris removal service," leave
  it alone unless Dante confirms that is genuinely offered as a standalone
  service.

**How to verify the fix landed.** Category changes are not instant and are not
visible from the dashboard alone:

1. In the dashboard, confirm the primary category reads *Junk removal service*
   and *Demolition contractor* is listed under additional categories.
2. Wait 24–72 hours. Google re-indexes categories on its own schedule.
3. Search `property cleanout near me` and `junk removal <a county>` from a
   logged-out browser with location set inside the service area, and check
   whether the listing appears in the local pack.
4. Search `demolition contractor <a county>` the same way. The additional
   category is working if the listing surfaces here *as well* — additional
   categories rank weaker than the primary, so expect it to place lower. That is
   normal, not a misconfiguration.
5. Some category edits trigger re-verification. If the profile goes into review,
   do not edit anything else until it clears.

---

## 2. Core business facts

Every value below is byte-identical to the site. NAP consistency depends on
exact matches, not near-misses (`LOCAL_SEO_PLAYBOOK.md`, Priority 3).

| Field | Value | Source |
|---|---|---|
| Business name | `Redemption Cleanout Services` | `business.name` |
| Phone | `(248) 321-9609` | `business.phoneDisplay` |
| Website | `https://redemptioncleanoutservices.com/?utm_source=google&utm_medium=gbp` | see section 6 |
| Address | **Hidden — service-area business** | `business.address.publicAddressEnabled: false` |

**The business name takes nothing appended.** Not "Metro Detroit", not
"Cleanouts & Demolition", not a city. A keyword-stuffed name is the most
commonly reported local-SEO violation there is, and any competitor can report it
in about ninety seconds.

**Address must stay hidden.** During setup Google asks whether to add a location
customers can visit — the answer is **no**. Enter the mailing address for
verification if required, then confirm the *hide address* option is selected so
the listing shows a service area rather than a pin.
`429 South Main Street` is withheld everywhere on the site
(`business.ts` renders it nowhere; `structuredData.ts` omits it from the
`LocalBusiness` schema). Publishing it on Google while the site withholds it is
both an inconsistency Google can see and grounds for suspension. If leadership
ever wants it public, that is the five-point checklist in `business.ts` plus an
entry in `CONTENT_APPROVALS.md` — flip both together or neither.

---

## 3. Service area — all seven counties

Add as areas served, using Google's **county** entries rather than a long city
list:

1. Oakland County, MI
2. Macomb County, MI
3. Wayne County, MI
4. St. Clair County, MI
5. Livingston County, MI
6. Washtenaw County, MI
7. Monroe County, MI

Source: `src/content/serviceAreas.ts` (seven county pages) and
`business.serviceRegionSummary`. This is the one service-scope item
`CONTENT_APPROVALS.md` marks fully approved. It matches the seven
`AdministrativeArea` nodes in the `LocalBusiness` and `Service` schema, so the
profile and the site's structured data agree exactly.

---

## 4. Business description

**740 characters** — within Google's 750 limit. Names both service lines in the
second paragraph. Voice is the site's: direct, calm, no shame framing, no
keyword list.

```
Redemption Cleanout Services clears and restores property across Metro Detroit — full property cleanouts and demolition, one crew, one point of contact.

We clear entire properties top to bottom: estate and inherited homes, foreclosure and distressed property, commercial and office space, severe clutter, and move-out and downsizing jobs. We also handle demolition — interior gut-outs, garages, decks, sheds, pole barns, concrete removal, and full structure teardowns — hauling the debris out with the same crew.

Founder Dante Terracciano brings 13 years of real-estate experience, so closings, listing dates, and investor timelines are understood.

Estimates start from photos over the phone. The final quote is given on site, in person.
```

Adapted from `Hero.tsx`, `services.ts` (`definition` fields), and
`WhyRedemption.tsx`. Deliberately absent: "fully insured", "licensed",
"same-day" — all unverified open items in `CONTENT_APPROVALS.md`. The 13-years
figure carries a caveat; see **Open items**.

---

## 5. Services list

GBP services are free text under each category. Order matters — the first few
are what shows without tapping "more". Descriptions are pulled from
`services.ts`, trimmed to GBP's ~300-character service-description limit.

### Under *Junk removal service* (primary)

| Service name | Description |
|---|---|
| **Full Property Cleanouts** | A complete, top-to-bottom removal of a property's contents — every room, closet, garage, basement, attic, and outbuilding. One crew, one scope, the whole property cleared and left ready for what comes next. |
| **Estate & Inherited Property Cleanouts** | Clearing a property after a loss, an inheritance, or a move into senior care — at the pace and with the privacy the situation calls for. Sentimental items you flag are set aside, never discarded by default. |
| **Foreclosure & Distressed Property Cleanouts** | Clearing an abandoned, vacated, or repossessed property and getting it ready for inspection, listing, or renovation on a lender's timeline. Before-and-after photo documentation on request. |
| **Commercial Property Cleanouts** | Offices, retail, warehouse, and industrial space cleared of furniture, fixtures, equipment, and inventory — scheduled around your operating hours, including after-hours and weekends. |
| **Hoarding-Related & Severe-Clutter Cleanouts** | Severe clutter cleared in a way that respects the person connected to it — private, judgment-free, focused on getting the space safe and usable again. |
| **Move-Out & Downsizing Cleanouts** | Everything that isn't coming with you, cleared ahead of a move, a downsize, or a senior-living transition. Timelines built around your move or lease-end date. |
| **Residential Junk Removal & Single-Area Cleanouts** | A defined space or a specific list of items rather than a whole property — garage, basement, and attic clearing, furniture and appliance removal, yard and construction debris. |
| **Garage, Basement & Attic Clearing** | Single-room and partial-property jobs, including furniture, appliances, and stored contents. |
| **Pre-Sale & Renovation Prep** | Clearing a property before listing, photography, or a renovation start — built around the closing, listing, or contractor date already on the calendar. |

### Under *Demolition contractor* (additional)

These must not be buried. If GBP orders services by category, confirm the
demolition block is reachable without excessive scrolling; if it lets you
interleave, promote **Interior Gut-Outs & Tear-Outs** into the top five overall.

| Service name | Description |
|---|---|
| **Interior Gut-Outs & Tear-Outs** | Walls, fixtures, cabinetry, flooring, and ceilings taken out ahead of a renovation. The same crew that takes it down loads it out and clears the site. |
| **Garage, Shed & Pole Barn Demolition** | Detached garages, carports, sheds, pole barns, and outbuildings removed, with full debris haul-off. |
| **Deck, Porch & Fence Removal** | Decks, porches, fencing, and above-ground pools cut down and hauled out. |
| **Full Structure Teardowns** | Complete structure demolition, licensed and insured, with debris load-out and site clearing by the same crew. |
| **Concrete, Slab & Hardscape Removal** | Concrete, slab, and hardscape broken out and removed, with metal and material recycling where the load allows. |
| **Debris Haul-Off & Site Clearing** | Complete load-out and site clearing after demolition — the site left clear, not left as a pile for a second contractor. |

**Cleanout-plus-demolition is the differentiator.** From `services.ts`:
*"Because we run cleanouts too, a property that needs to be emptied and then
torn down is one job with one point of contact — not two contractors scheduling
around each other."* Worth working into the first Post (section 8).

---

## 6. Website URL and UTM tracking

Use in the profile's website field:

```
https://redemptioncleanoutservices.com/?utm_source=google&utm_medium=gbp
```

**This is safe to apply.** The site is Next.js App Router; unrecognised query
parameters are ignored by routing and no code strips or redirects on `utm_*`
(checked across `src/` and `next.config.mjs`). GA4 parses `utm_*` natively into
its default channel grouping, so no code change is needed to make this work.

**One caveat on the numbers.** GA4 only loads after a visitor accepts the
consent banner (`ConsentBanner.tsx`, `ConsentGate.tsx`, and `ANALYTICS.md`), so
GBP-attributed sessions will undercount by whatever share of visitors decline.
Treat it as a trend line, not a census — and cross-check against the profile's
own "website clicks" metric, which has no consent gate.

Optional, if you want per-destination detail later: add
`&utm_campaign=` values on the Posts and service links — e.g.
`utm_campaign=intro_post`. Keep `utm_source=google&utm_medium=gbp` constant so
the channel grouping stays clean.

---

## 7. Actions, messaging, and hours

**Primary action button.** The site's primary CTA is "Request a Walkthrough"
(`/request-walkthrough`). GBP does not offer a custom button label, so use the
closest available:

- If **"Request a quote"** is offered, enable it and point it at
  `https://redemptioncleanoutservices.com/request-walkthrough/?utm_source=google&utm_medium=gbp&utm_campaign=request_quote`
- Otherwise use the **Appointment / Booking link** field with the same URL.

**Before enabling either, confirm the Jobber form is actually live.**
`NEXT_PUBLIC_JOBBER_EMBED_URL` and `NEXT_PUBLIC_JOBBER_REQUEST_FORM_URL` are
both unset (`CONTENT_APPROVALS.md`, `JOBBER_SETUP.md`). Pointing a quote button
at a page whose form has not rendered is worse than not having the button.
Load the page and check before switching it on.

**Messaging (chat).** Only enable if someone will genuinely answer within
Google's expected response window — Google surfaces and penalises slow response
times, and this is a phone-and-text business where `click_call` and `click_text`
are the best lead proxies (`ANALYTICS.md`). Recommendation: leave messaging off
initially, get the profile verified and reviews flowing, then revisit. Ask Dante.

**Hours — blocked, needs Dante.** Operating hours are an open item in
`CONTENT_APPROVALS.md`, defined nowhere on the site, and I will not invent them.
Google will ask during setup. Hours the phone does not honour generate one-star
reviews. Get them in writing before completing setup. If the business genuinely
runs on call-and-schedule rather than fixed hours, ask Dante whether to mark the
profile "open 24 hours" (only if calls are actually answered around the clock)
or to set realistic weekday hours — the second is almost always the right answer.

---

## 8. Photos

All from `public/images/photos/` and `public/images/brand/`. Alt-text-derived
descriptions are in `src/content/gallery.ts`. Upload in this order.

### Profile photo (logo)
- `public/images/brand/logo-master.png`

⚠️ **Two caveats.**

*Softness.* The file is 3000×1235, so it clears GBP's minimum comfortably — but
`CONTENT_APPROVALS.md` flags the source as *"real (but low-resolution, ~199×88px
upscaled) … used as a placeholder."* The large dimensions are an upscale, not
detail, so expect it to look soft once Google sharpens it. A master vector logo
is an outstanding production asset — replace this when the AI/EPS/SVG arrives.

*Aspect ratio.* At 3000×1235 this is a wide lockup, and GBP renders the profile
photo in a square/circular crop. Check the preview before saving: a centre crop
will likely cut the wordmark. If it does, export a square version with the mark
centred and padding around it rather than letting Google choose the crop.

### Cover photo
- `public/images/photos/branded-truck-and-dump-trailer-residential-drive.jpg` —
  the site's own hero image. Branded truck and trailer in a residential
  driveway: recognisable, professional, no clutter in frame.

### Branded truck & equipment
- `branded-truck-dump-trailer-driveway.jpg`
- `branded-dump-trailer-curbside.jpg`
- `metal-recycling-load-dropoff.jpg` — supports the recycling/diversion story

### Crew working safely in branded uniforms
- `crew-branded-shirts-yard-clearing.jpg`
- `commercial-forklift-pallet-loading.jpg`
- `garage-cleanout-crew-sorting-before.jpg`

### Before/after pairs, identical angles

**Demolition — commercial gut-out (August 2026).** The strongest asset set on
the site: one office suite, before shot 21 August and after 27 August, same
building six days apart.

| Before | After |
|---|---|
| `demolition-teardown-before-02.jpg` (main corridor) | `demolition-teardown-after-05.jpg` (looking back toward entrance) |
| `demolition-teardown-before-04.jpg` (open office area) | `demolition-teardown-after-03.jpg` (corridor and offices gone) |
| `demolition-teardown-before-05.jpg` (corridor, doorways) | `demolition-teardown-after-01.jpg` (bare block and slab) |

⚠️ **Caption these accurately.** `CONTENT_APPROVALS.md` is explicit: these show
a **large interior gut-out, not a structure teardown**, and *"any copy implying
these photos show a teardown would be wrong."*

**Cleanouts.**

| Before | After |
|---|---|
| `garage-cleanout-crew-sorting-before.jpg` | `garage-cleanout-cleared-bay-after.jpg` |
| `townhouse-contents-staged-before.jpg` | `townhouse-patio-cleared-after.jpg` |

### Completed / cleared spaces
- `cleared-garage-bay-after.jpg`
- `pole-barn-cleared-interior.jpg`
- `full-property-cleanout-removal.jpg`
- `light-demolition-deck-removal.jpg` — crew cutting a rotted deck frame
  (filename is legacy; the work shown is deck demolition)
- `estate-cleanout-driveway-staging.jpg`

### Hold back — do not upload

Per the brand rules in `CONTENT_APPROVALS.md` and `IMAGE_REQUIREMENTS.md`:

- `severe-clutter-living-room-before.jpg`
- `severe-clutter-basement-before.jpg`
- `yard-debris-and-equipment-removal.jpg`

These are legitimate on `/projects`, where they sit in context inside a full
gallery. On a Google profile they appear as isolated thumbnails next to the
business name — which is exactly the "trash shock" framing the brand guide
prohibits. Standalone, they read as spectacle rather than as work.
**Recommendation: leave them off the profile.** If Dante wants severe-clutter
work represented, shoot a matched *after* frame first and post the pair.

Also excluded, and not negotiable:
- **Grace Centers of Hope truck frames** — third-party branding, approval
  required from Grace Centers, not just Dante. Not held.
- **`IMG_0421`** (hard hat / hi-vis founder-portrait candidate) — subject
  unidentified. Not confirmed as Dante.
- **The Drive marketing flyer** (`92b605d0-….PNG`) — before/after images appear
  to be stock or AI-generated. Never usable as project photography.

### Two rules that apply to every upload

1. **Strip EXIF.** `tools/import-photos.py` strips it for files that go through
   the site, so the repo copies listed above are clean. A phone photo uploaded
   straight to Google can carry GPS. Route future photos through the import
   tool, or post from an app that strips location.
2. **No caption naming a city, owner, address, or client** unless Dante supplies
   that fact in writing. It cannot be read off a photograph.

---

## 9. Initial Post

Under 1,500 characters. Names both service lines and leads with the
one-contractor differentiator.

**Suggested image:** `branded-truck-and-dump-trailer-residential-drive.jpg`, or
the `demolition-teardown-before-02.jpg` / `demolition-teardown-after-01.jpg`
pair if the Post format takes two.

**Button:** *Learn more* →
`https://redemptioncleanoutservices.com/?utm_source=google&utm_medium=gbp&utm_campaign=intro_post`

```
Redemption Cleanout Services works across all seven Metro Detroit counties — Oakland, Macomb, Wayne, St. Clair, Livingston, Washtenaw, and Monroe.

We do two things, and we do both with the same crew.

Cleanouts: entire properties cleared top to bottom — estate and inherited homes, foreclosures and distressed property, commercial and office space, severe clutter, and move-outs. Every room, closet, garage, basement, attic, and outbuilding.

Demolition: interior gut-outs, garages, decks, sheds, pole barns, concrete removal, and full structure teardowns — with the debris hauled out by the same crew that took it down.

If a property needs to be emptied and then torn down, that is one job with one point of contact, not two contractors scheduling around each other.

Estimates start from photos over the phone. The final quote is given on site, in person, in writing.

Call or text (248) 321-9609.
```

Ongoing cadence is in `LOCAL_SEO_PLAYBOOK.md` Priority 6: one job posted
weekly, same photos to Instagram, photos added to the profile's photo section
as well as the Post.

---

## 10. Reviews — explicitly out of scope

No reviews are to be added, edited, solicited, or incentivised as part of this
work. Past clients have already agreed to leave reviews once the profile is
live (`CONTENT_APPROVALS.md`, confirmed 2026-08-31) — that is a genuine pipeline
and it does not need help.

When the profile is verified it produces two different URLs, which are not
interchangeable:

| Env var | Which URL | Where it appears |
|---|---|---|
| `NEXT_PUBLIC_GOOGLE_REVIEW_URL` | the **write-a-review** short link | "Leave a Google Review" button on `/reviews` |
| `NEXT_PUBLIC_GOOGLE_BUSINESS_URL` | the **listing** URL | "See the Google listing" link on `/reviews` |

Set both in Vercel, redeploy, then click both buttons on the live site. Note the
warning in `ENVIRONMENT_VARIABLES.md`: a declared-but-empty variable reads as
unset and fails quietly rather than loudly.

---

## Open items — need Dante

| Item | Status | Blocks |
|---|---|---|
| **Operating hours** | Undefined anywhere | Completing setup — Google asks for these |
| **Does a profile already exist?** | Repo says no; brief says yes | Whether this is a claim or an edit; duplicate risk |
| **Tagline: "Redeem" vs "Reclaim"** | Repo says *Redeem*, approved | Any tagline use; site copy if reversed |
| **Attributes** (veteran-owned, women-owned, etc.) | Nothing in repo either way | Leave every attribute unset until confirmed — do not guess |
| **"Fully insured" / licensing claims** | Unverified open items | Kept out of the description; needed before any insured/licensed claim on the profile |
| **13 vs 12 years real-estate experience** | Site uses 13; two client-supplied assets say 12 | The description above uses 13 to match the site — if 12 is correct, both need changing together |
| **LARA licence number** | Unconfirmed | Michigan may require the number in advertising; the profile has a field for it |
| **Jobber form live?** | Env vars unset | The "Request a quote" button (section 7) |
| **Messaging on or off?** | Decision needed | Response-time expectations |
| **Business email** | None published anywhere | Optional on GBP; leave blank if none is official |

## Photography gaps worth shooting

The demolition set is strong but narrow — it is one commercial interior gut-out.
Before the listing goes fully live, worth capturing:

1. **A structure teardown, before and after.** The services list advertises
   full teardowns, garages, sheds, and pole barns; every published demolition
   photo is an interior gut-out. This is the biggest evidence gap.
2. **Exterior demolition pairs** — garage, shed, deck, or pole barn, shot from
   an identical angle before and after. Only one deck photo exists, and it has
   no matching after.
3. **Concrete or slab removal** — advertised, entirely unphotographed.
4. **A matched *after* for the severe-clutter frames**, which would let those
   strong before shots be used as a pair rather than held back.
5. **A confirmed founder portrait of Dante** — `IMG_0421` may already be it;
   it just needs identifying.
6. **A master vector logo** (AI/EPS/SVG) to replace the low-resolution
   placeholder as the profile photo.

Property-owner permission for job photography is already held
(`CONTENT_APPROVALS.md`, granted 2026-08-31), so the gate on new photos is
shooting them, not clearing them.
