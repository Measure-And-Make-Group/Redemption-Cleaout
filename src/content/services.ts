import type { ServiceDefinition } from "@/types/content";

/**
 * TWO PILLAR SERVICES.
 *
 * The site previously ran eight standalone service pages (estate, commercial,
 * foreclosure, hoarding, junk removal, move-out, light demolition). Those are
 * consolidated here into two pillars — cleanouts and demolition — and the 301s
 * in next.config.mjs point each old URL at the matching pillar page. The
 * cleanout types are named in the cleanouts definition and audience list
 * rather than broken out into their own sections.
 *
 * Do not re-split these into separate pages without also updating
 * next.config.mjs redirects, navigation.ts, and the sitemap.
 */
export const services: ServiceDefinition[] = [
  {
    slug: "full-property-cleanouts",
    name: "Property Cleanouts & Junk Removal",
    shortName: "Cleanouts & Junk Removal",
    priority: 1,
    image: {
      src: "/images/photos/full-property-cleanout-removal.jpg",
      alt: "Furniture, mattresses, and bagged household contents staged for removal alongside a home during a full property cleanout.",
      caption: "A full property cleanout staged for removal — every room, top to bottom.",
    },
    primaryKeyword: "full property cleanout",
    heroHeadline: "Property Cleanouts & Junk Removal",
    ctaHeadline: "Ready to plan your property cleanout?",
    metaDescription:
      "Full property cleanouts and junk removal across Metro Detroit — estate, foreclosure, commercial, hoarding, and move-out clearing, plus single garages, basements, attics, and item pickups, in Macomb, Oakland, Wayne, Washtenaw, Livingston, Monroe, and St. Clair counties.",
    situation:
      "We clear estates, homes, and commercial properties from top to bottom. We also haul furniture, appliances, and junk from individual rooms, garages, or basements.",
    definition:
      "A full property cleanout is a complete, top-to-bottom removal of a property's contents — estate, foreclosure, commercial, hoarding-related, and move-out jobs. Junk removal is the same work on a defined scope: one area, or a specific list of items. Either way it is one crew and one agreed scope, and the space is left ready for what comes next. Anything you want kept is set aside, and usable items are sorted for donation where practical.",
    weHandle: [
      "Full interior clearing — every room, closet, and storage area",
      "Junk removal from a single garage, basement, attic, or room",
      "Garages, basements, attics, pole barns, and outbuildings",
      "Furniture, appliances, and bulk household goods",
      "Commercial furniture, fixtures, equipment, and leftover inventory",
      "Yard debris, scrap metal, and exterior clearing",
      "Sorting for donation, recycling, and disposal",
      "Broom-swept final condition on completion",
    ],
    mayRequireSpecialist: [
      "Regulated asbestos or lead abatement",
      "Mold or water-damage remediation",
      "Biohazard or crime-scene cleanup",
    ],
    whoItsFor: [
      "Homeowners and families clearing a property before listing, renovation, or a move",
      "Anyone with one space or a set of items that needs to go",
      "Executors, heirs, and out-of-state family managing an estate",
      "Realtors and investors preparing a property for market",
      "Landlords and property managers after a tenant move-out",
      "Banks, asset managers, and foreclosure companies clearing distressed property",
      "Business owners and commercial brokers turning over a space",
    ],
    commonConditions: [
      "Years of accumulated belongings across every room",
      "A mix of items to keep, donate, and discard",
      "Limited access — narrow staircases, tight hallways and doorways, upper floors with no working elevator, or a driveway that won't fit a trailer",
      "A closing date, listing date, lease-end, or renovation start driving the timeline",
    ],
    process: [
      {
        title: "Send Photos",
        description:
          "Text or email photos of the property and we'll give you a ballpark estimate over the phone, usually the same day.",
      },
      {
        title: "On-Site Walkthrough",
        description:
          "We come out and walk the property with you. That's where the final quote is given — in person, in writing, with the scope confirmed.",
      },
      {
        title: "Full Clearing",
        description: "Our crew clears the spaces and items listed in your quote.",
      },
      {
        title: "Sort & Divert",
        description:
          "Items are sorted for donation and recycling where practical, not landfilled by default.",
      },
      {
        title: "Final Walkthrough",
        description:
          "We walk the property with you at completion to confirm the job matches what was quoted.",
      },
    ],
    relatedServiceSlugs: ["demolition"],
    faqs: [
      {
        question: "Can I get a price without an on-site visit?",
        answer:
          "You can get an estimate. Send us photos and we'll give you a ballpark range over the phone. The final quote is given on site, in person, once we've seen the property — that's how the number you're given is the number that holds.",
      },
      {
        question: "Do you take smaller junk-removal jobs?",
        answer:
          "Yes. A single garage, basement, attic, or a batch of furniture and appliances is handled the same way as a full cleanout: send photos for a ballpark estimate by phone, and the final price is confirmed on site before anything is hauled.",
      },
      {
        question: "How long does a full property cleanout take?",
        answer:
          "It depends on the property's size and condition. Most single-family homes are cleared in one to three days. You'll get a real timeline at the walkthrough, not a guess.",
      },
      {
        question: 'What does "limited access" mean on a cleanout?',
        answer:
          "Anything that makes getting contents out of the building slower or harder — narrow staircases, tight hallways and doorways, an upper-floor unit with no working elevator, or a driveway a truck and trailer can't reach. It affects crew size and time, which is exactly why the final quote comes after we've seen the property in person.",
      },
      {
        question: "Do you sort items for donation?",
        answer:
          "Yes. Where it's practical, we separate usable items for donation and materials for recycling rather than sending everything to a landfill by default.",
      },
      {
        question: "Can you work around a closing, listing, or lease-end date?",
        answer:
          "Deadline awareness is part of how we scope every job. Tell us your date up front and we'll build the plan around it.",
      },
      {
        question: "Do you serve all of Metro Detroit?",
        answer:
          "Yes — Macomb, Oakland, St. Clair, Wayne, Monroe, Washtenaw, and Livingston counties.",
      },
    ],
  },
  {
    slug: "demolition",
    name: "Demolition",
    shortName: "Demolition",
    priority: 2,
    image: {
      src: "/images/photos/demolition-teardown-after-04.jpg",
      alt: "A commercial interior stripped to bare block walls and concrete slab after a full interior tear-out, with the framing openings left in place.",
      caption:
        "A commercial suite taken back to bare block and slab — partitions, ceilings, flooring and fixtures out, debris hauled by the same crew.",
    },
    primaryKeyword: "demolition contractor metro detroit",
    heroHeadline: "Demolition",
    ctaHeadline: "Ready to plan your demolition project?",
    metaDescription:
      "Demolition across Metro Detroit — interior tear-outs, garages, decks, sheds, pole barns, and full structure teardowns in Macomb, Oakland, Wayne, Washtenaw, Livingston, Monroe, and St. Clair counties.",
    situation:
      "From interior tear-outs before a renovation to garages, decks, outbuildings, and full structures, we handle the demolition and haul away the debris.",
    definition:
      "Redemption handles demolition from interior tear-outs through full structure teardowns, and hauls the debris out with the same crew. We're insured for the work we take on, and because we run cleanouts too, a property that needs to be emptied and then torn down is one job with one point of contact — not two contractors scheduling around each other.",
    weHandle: [
      "Interior tear-outs — walls, fixtures, cabinetry, flooring, ceilings",
      "Garages, carports, and detached outbuildings",
      "Decks, porches, fencing, and above-ground pools",
      "Sheds and pole barns",
      "Full structure teardowns",
      "Concrete, slab, and hardscape removal",
      "Complete debris haul-off, load-out, and site clearing",
      "Metal and material recycling where the load allows",
    ],
    mayRequireSpecialist: [
      "Asbestos and lead abatement, which must be completed by a licensed abatement contractor before demolition begins",
      "Utility disconnects, which the utility provider must complete and confirm",
      "Engineered shoring or load-bearing structural work requiring a licensed structural engineer",
    ],
    whoItsFor: [
      "Homeowners and investors tearing out an interior before renovation",
      "Builders and contractors who need a site cleared before their crew starts",
      "Realtors and asset managers dealing with an unsalvageable structure",
      "Commercial owners removing fixtures, build-outs, or outbuildings",
      "Property owners with a failing garage, deck, barn, or shed",
    ],
    commonConditions: [
      "An interior that has to be taken back to studs before a renovation starts",
      "A structure that's unsafe, storm-damaged, or past repair",
      "Debris volume that a dumpster rental won't cover",
      "A site that has to be both emptied and torn down",
    ],
    process: [
      {
        title: "Send Photos",
        description:
          "Text or email photos of what's coming down and we'll give you a ballpark estimate over the phone.",
      },
      {
        title: "On-Site Walkthrough",
        description:
          "We assess the structure, access, and utilities in person, and give the final quote on site. If a project needs a permit or a utility disconnect, we flag it here and confirm who's handling it before anything is scheduled.",
      },
      {
        title: "Demolition",
        description:
          "The structure comes down under the scope confirmed at the walkthrough.",
      },
      {
        title: "Haul-Off & Site Clearing",
        description:
          "All debris is loaded out and the site is left clear — recyclable metal and materials diverted where the load allows.",
      },
      {
        title: "Final Walkthrough",
        description:
          "We walk the site with you to confirm the work matches what was quoted.",
      },
    ],
    relatedServiceSlugs: ["full-property-cleanouts"],
    faqs: [
      {
        question: "How big a demolition project will you take on?",
        answer:
          "We handle everything from an interior tear-out to a full structure teardown, and we're actively taking on larger projects. Send photos and we'll tell you straight away whether it's in our scope.",
      },
      {
        question: "Do you haul the debris away too?",
        answer:
          "Yes. Demolition and haul-off are the same job here — the same crew that takes it down loads it out and clears the site. You aren't left with a pile and a second contractor to hire.",
      },
      {
        question: "Can you clear the property and then demolish it?",
        answer:
          "Yes, and it's one of the most common reasons people call. Running the cleanout and the demolition through one company means one scope, one schedule, and no gap between the two.",
      },
      {
        question: "Are you insured?",
        answer:
          "Yes. Redemption is insured for the demolition and cleanout work it takes on. If your project needs proof of coverage before work starts, ask at the walkthrough. Any part of a job that has to be done by a separately licensed specialist, such as asbestos or lead abatement, is flagged up front.",
      },
      {
        question: "What about permits, utilities, and asbestos?",
        answer:
          "We flag all three at the walkthrough. Utility disconnects have to be completed and confirmed by the provider, and any asbestos or lead abatement has to be done by a licensed abatement contractor before demolition starts. Where a permit is required, we'll confirm who is pulling it before the job is scheduled.",
      },
      {
        question: "Do you serve all of Metro Detroit?",
        answer:
          "Yes — Macomb, Oakland, St. Clair, Wayne, Monroe, Washtenaw, and Livingston counties.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return services.find((s) => s.slug === slug);
}

export const cleanoutsService = services[0];
export const demolitionService = services[1];
