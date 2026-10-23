import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";
import { Reveal } from "@/components/motion/Reveal";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import {
  business,
  formatEmailHref,
  formatPhoneSmsHref,
  formatPhoneTelHref,
} from "@/content/business";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact Redemption Cleanout Services — call or text (248) 321-9609 for a cleanout or demolition estimate anywhere in Metro Detroit.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />

      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Call, text, or send the property details online. All three reach the same person."
      />

      <section className="py-section">
        <div className="container-page grid gap-x-14 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="border-t border-heritage-black/12">
              <Reveal>
                <div className="grid gap-2 border-b border-heritage-black/12 py-8 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-8">
                  <h2 className="eyebrow-plain text-steel-gray">Call</h2>
                  <div>
                    <a
                      href={formatPhoneTelHref()}
                      className="font-display text-3xl font-semibold text-heritage-black transition-colors duration-micro hover:text-redemption-red"
                    >
                      {business.phoneDisplay}
                    </a>
                    <p className="mt-2 text-sm text-steel-gray">
                      Fastest way to reach us during working hours.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="grid gap-2 border-b border-heritage-black/12 py-8 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-8">
                  <h2 className="eyebrow-plain text-steel-gray">Text</h2>
                  <div>
                    <a
                      href={formatPhoneSmsHref()}
                      className="font-display text-3xl font-semibold text-heritage-black transition-colors duration-micro hover:text-redemption-red"
                    >
                      {business.phoneDisplay}
                    </a>
                    <p className="mt-2 text-sm text-steel-gray">
                      Good for sending photos or a quick question.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="grid gap-2 border-b border-heritage-black/12 py-8 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-8">
                  <h2 className="eyebrow-plain text-steel-gray">Email</h2>
                  <div>
                    <a
                      href={formatEmailHref()}
                      className="break-all font-display text-xl font-semibold text-heritage-black transition-colors duration-micro hover:text-redemption-red"
                    >
                      {business.email}
                    </a>
                    <p className="mt-2 text-sm text-steel-gray">
                      Best for photo sets, documents, or anything with a paper trail.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={220}>
                <div className="grid gap-2 border-b border-heritage-black/12 py-8 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-8">
                  <h2 className="eyebrow-plain text-steel-gray">Online</h2>
                  <div>
                    <Link
                      href="/request-walkthrough"
                      className="font-display text-3xl font-semibold text-heritage-black transition-colors duration-micro hover:text-redemption-red"
                    >
                      Get a free estimate
                    </Link>
                    <p className="mt-2 text-sm text-steel-gray">
                      Send the property details and we&apos;ll follow up to schedule.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={280}>
                <div className="grid gap-2 py-8 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-8">
                  <h2 className="eyebrow-plain text-steel-gray">Instagram</h2>
                  <div>
                    <a
                      href={business.instagramUrl}
                      className="font-display text-xl font-semibold text-heritage-black transition-colors duration-micro hover:text-redemption-red"
                    >
                      {business.instagramHandle}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={140} className="lg:col-span-5">
            <div className="frame-double">
              <div className="bg-warm-concrete p-8">
                <h2 className="eyebrow-plain text-steel-gray">Where we work</h2>
                <p className="mt-4 font-display text-xl font-semibold text-heritage-black">
                  {business.address.publicAreaDescription}
                </p>
                <p className="mt-4 text-body-base text-steel-gray">
                  We serve {business.serviceRegionSummary}.
                </p>
                <p className="mt-5 text-sm text-steel-gray">
                  Redemption works on-site at your property rather than from a walk-in
                  location, so walkthroughs are scheduled at the property itself.
                </p>
                <Link href="/service-areas" className="link-editorial mt-7">
                  See service areas
                  <span aria-hidden="true" className="btn-arrow">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
