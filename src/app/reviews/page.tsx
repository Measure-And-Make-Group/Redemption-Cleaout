import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ReviewSection } from "@/components/sections/ReviewSection";
import { googleBusinessUrl, googleReviewUrl } from "@/content/business";
import { testimonials } from "@/content/testimonials";
import { CallToAction } from "@/components/ui/CallToAction";
import { StructuredData } from "@/components/StructuredData";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Reviews",
  description:
    "Authentic reviews for Redemption Cleanout Services — property cleanouts and demolition across Metro Detroit.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Reviews", href: "/reviews" },
        ]}
      />
      <PageHero
        eyebrow="Reviews"
        title="Redemption reviews"
        description={
          testimonials.length || googleBusinessUrl || googleReviewUrl
            ? undefined
            : "Explore before-and-after photos of cleanouts and demolition jobs across Metro Detroit."
        }
      />
      <ReviewSection />
      <CallToAction
        location="reviews_cta"
        variant="band"
        headline="See our work"
        primaryHref="/projects"
        primaryLabel="View Before and After Photos"
        showCallText={false}
      />
    </>
  );
}
