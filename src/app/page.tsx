import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FlagshipServices } from "@/components/sections/FlagshipServices";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhyRedemption } from "@/components/sections/WhyRedemption";
import { PreviousWork } from "@/components/sections/PreviousWork";
import { ReviewSection } from "@/components/sections/ReviewSection";
import { testimonials } from "@/content/testimonials";
import { CallToAction } from "@/components/ui/CallToAction";
import { StructuredData } from "@/components/StructuredData";
import { webPageJsonLd } from "@/lib/structuredData";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Fast, Reliable Cleanouts & Demolition | Metro Detroit",
  description:
    "Estate cleanouts, junk removal, and demolition across Metro Detroit — Macomb, Oakland, St. Clair, Wayne, Monroe, Washtenaw, and Livingston counties. Estimates from photos, final quote on site.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <StructuredData
        data={webPageJsonLd(
          "Redemption Cleanout Services",
          "/",
          "Estate cleanouts, junk removal, and demolition throughout Metro Detroit.",
        )}
      />
      <Hero />
      <FlagshipServices />
      <PreviousWork />
      <HowItWorksSection />
      <WhyRedemption />
      {testimonials.length > 0 && <ReviewSection />}
      <CallToAction
        location="homepage_final_cta"
        variant="band"
        headline="Tell us what needs to go."
        supportingText="Share a few photos and the city where the property is located."
      />
    </>
  );
}
