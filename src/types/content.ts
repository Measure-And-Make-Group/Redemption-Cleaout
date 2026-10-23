export type AddressConfig = {
  /**
   * Master switch for publicly displaying the full street address (footer,
   * contact page, map embeds, LocalBusiness schema). Leadership must confirm
   * all conditions in CONTENT_APPROVALS.md before this becomes true.
   */
  publicAddressEnabled: boolean;
  /** Internal only — never rendered while publicAddressEnabled is false. */
  street: string;
  city: string;
  state: string;
  zip: string;
  /** Safe to show publicly regardless of publicAddressEnabled. */
  publicAreaDescription: string;
};

export type BusinessInfo = {
  name: string;
  legalTagline: string;
  founderName: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  primaryDomain: string;
  instagramHandle: string;
  instagramUrl: string;
  address: AddressConfig;
  serviceRegionSummary: string;
};

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type ServiceImage = {
  src: string;
  alt: string;
  /** Short caption shown under the image. Must describe real work only. */
  caption: string;
};

export type ServiceDefinition = {
  slug: string;
  name: string;
  shortName: string;
  priority: number;
  /** Authentic job photography. Omit when no approved photo exists yet. */
  image?: ServiceImage;
  heroHeadline: string;
  /** Closing call-to-action heading on the service page. */
  ctaHeadline: string;
  metaDescription: string;
  situation: string;
  definition: string;
  weHandle: string[];
  mayRequireSpecialist: string[];
  whoItsFor: string[];
  commonConditions: string[];
  process: ProcessStep[];
  relatedServiceSlugs: string[];
  faqs: ServiceFAQ[];
  primaryKeyword: string;
};

export type AudienceDefinition = {
  slug: string;
  name: string;
  shortName: string;
  heroHeadline: string;
  metaDescription: string;
  summary: string;
  needs: string[];
  howRedemptionHelps: string[];
  relatedServiceSlugs: string[];
  faqs: ServiceFAQ[];
  ctaLabel: string;
  primaryKeyword: string;
};

export type ServiceAreaDefinition = {
  slug: string;
  /** County name without the word "County" — e.g. "Oakland". */
  countyName: string;
  stateAbbr: string;
  /** Cities and communities covered. Drives the on-page list and local SEO. */
  cities: string[];
  heroHeadline: string;
  metaDescription: string;
  localIntroduction: string;
  propertyContext: string;
  relevantServiceSlugs: string[];
  faqs: ServiceFAQ[];
  approved: boolean;
};

/**
 * A city landing page, nested under its county.
 *
 * These exist to be found in local search — "cleanout company in Sterling
 * Heights" is how this work is looked for. That only works if each page is
 * genuinely about its city. A page assembled by swapping a name into a
 * template is a doorway page, which Google demotes and which would drag the
 * rest of the site down with it.
 *
 * The bar for adding one: real local specifics a resident would recognise, and
 * nothing invented. Never state an ordinance, permit fee, disposal facility,
 * partnership, or a job Redemption has done in that city unless it has been
 * confirmed — see CONTENT_APPROVALS.md.
 */
export type CityDefinition = {
  /** e.g. "troy-mi" */
  slug: string;
  cityName: string;
  /** Slug of the parent county in serviceAreas.ts, e.g. "oakland-county-mi". */
  countySlug: string;
  stateAbbr: string;
  /** Neighbourhoods, districts, corridors or landmarks a local would know. */
  localAreas: string[];
  /** What the built environment is actually like. Roughly 40-70 words. */
  housingContext: string;
  /** What cleanout and demolition work here typically involves. 60-100 words. */
  workContext: string;
  /** 3-5 specifics that genuinely differ here. Not generic selling points. */
  localConsiderations: string[];
  faqs: ServiceFAQ[];
  metaDescription: string;
  primaryKeyword: string;
  /** Slugs of nearby cities we also serve, for internal linking. */
  nearbySlugs: string[];
};

export type ResourceDefinition = {
  slug: string;
  /** Editorial headline. Rendered as the page H1 and in the /resources index. */
  title: string;
  /**
   * Shorter title for the <title> tag only. The root template appends
   * " | Redemption Cleanout Services" (31 characters), so a full editorial
   * headline pushes the tag well past the ~60 characters a SERP displays and
   * the keyword gets truncated away. Set this to a front-loaded short form and
   * leave `title` as the headline. Falls back to `title` when omitted.
   */
  seoTitle?: string;
  metaDescription: string;
  summary: string;
  publishedAt: string;
  sections: { heading: string; body: string[] }[];
};

export type BeforeAfterPhoto = {
  src: string;
  /** Required. Describes what the photo actually shows, not keywords. */
  alt: string;
  /** Intrinsic pixel size, so the photo renders at its own aspect ratio. */
  width: number;
  height: number;
};

/**
 * "pair": one Before and one After of the same view.
 * "project": Before and After photos from the same job, not matched view for
 * view — shown as two labeled groups.
 */
export type BeforeAfterSet =
  | { id: string; kind: "pair"; before: BeforeAfterPhoto; after: BeforeAfterPhoto }
  | {
      id: string;
      kind: "project";
      before: BeforeAfterPhoto[];
      after: BeforeAfterPhoto[];
    };

export type FAQEntry = ServiceFAQ & {
  category: string;
};

export type Testimonial = {
  id: string;
  authorLabel: string;
  role: string | null;
  quote: string;
  projectType: string | null;
  city: string | null;
  verified: boolean;
};

export type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};
