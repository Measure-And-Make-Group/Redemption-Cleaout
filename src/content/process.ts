import type { ProcessStep } from "@/types/content";

/**
 * Two-stage quoting: a ballpark estimate from photos over the phone, then the
 * binding quote in person on site. Keep every other mention of pricing on the
 * site consistent with this — an estimate is never presented as final, and the
 * final number is never presented as something we give sight-unseen.
 */
export const howItWorksSteps: ProcessStep[] = [
  {
    title: "Send Photos",
    description:
      "Text or email photos of the property — rooms, the garage, the basement, whatever needs to go. Call, text or email and we'll talk you through what to send.",
  },
  {
    title: "Estimate Over the Phone",
    description:
      "From the photos we give you a ballpark estimate, usually the same day, so you know the range before anyone comes out. No obligation, no charge.",
  },
  {
    title: "On-Site Walkthrough",
    description:
      "We come out and walk the property with you. Access, volume, and condition are things photos can't show, and they're what move a price — so the final quote is given here, in person.",
  },
  {
    title: "The Work",
    description:
      "Our crew clears the property or takes the structure down, safely and completely, sorting for donation and recycling where practical.",
  },
  {
    title: "Final Walkthrough",
    description:
      "We walk the property with you at completion to confirm the work matches what was quoted.",
  },
];
