import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JobberRequestForm } from "@/components/JobberRequestForm";
import { StructuredData } from "@/components/StructuredData";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import {
  formatEmailHref,
  jobberEmbedUrl,
  jobberRequestFormUrl,
} from "@/content/business";

export const metadata: Metadata = pageMetadata({
  title: "Get a Free Estimate",
  description:
    "Get a free cleanout or demolition estimate from Redemption Cleanout Services. Send photos or call or text (248) 321-9609. Serving Metro Detroit.",
  path: "/request-walkthrough",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Get a Free Estimate", href: "/request-walkthrough" },
];

export default function RequestWalkthroughPage() {
  const hasOnlineForm = Boolean(jobberEmbedUrl || jobberRequestFormUrl);

  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd(
          breadcrumbs.map(({ name, href }) => ({ name, path: href })),
        )}
      />
      <Breadcrumbs items={breadcrumbs} />

      <PageHero
        title="Get a free estimate"
        description="Share a few photos and tell us what needs to go. We’ll give you an estimate by phone and confirm the price in writing after an on-site walkthrough."
      />

      <section className="py-section">
        <div className="container-page grid gap-9 lg:grid-cols-[7fr_5fr] lg:gap-14">
          <div>
            <h2 className="mb-5 text-section font-bold text-heritage-black">
              {hasOnlineForm ? "Send your request" : "Start with photos or a call"}
            </h2>
            <JobberRequestForm />
            <p className="mt-5 text-body-base text-steel-gray">
              Prefer email?{" "}
              <a
                href={formatEmailHref()}
                className="font-semibold underline underline-offset-4"
              >
                Email your photos and project details
              </a>
              .
            </p>
          </div>

          <div className="border-t-2 border-redemption-red pt-6">
            <h2 className="font-display text-2xl font-bold text-heritage-black">
              What to share
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-body-base text-steel-gray">
              <li>The city where the property is located.</li>
              <li>Photos of the rooms, items, or structure that need clearing.</li>
              <li>Any deadline, tight access, or belongings you want set aside.</li>
            </ul>
            <p className="mt-6 text-body-base text-steel-gray">
              The estimate is free, and you can decide whether to book after you receive
              your quote.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
