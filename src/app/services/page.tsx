import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CallToAction } from "@/components/ui/CallToAction";
import { StructuredData } from "@/components/StructuredData";
import { Reveal } from "@/components/motion/Reveal";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { services } from "@/content/services";

export const metadata: Metadata = pageMetadata({
  title: "Cleanout & Demolition Services",
  description:
    "Property cleanouts, junk removal, and demolition throughout Metro Detroit — estate, foreclosure, commercial, hoarding, and move-out clearing, single-area junk removal, interior tear-outs, and structure teardowns.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />

      <PageHero
        eyebrow="Services"
        title="Cleanouts, junk removal, and demolition"
        description="We clear homes, businesses, and individual spaces across Metro Detroit. If a property needs both a cleanout and demolition, one crew can handle both."
      />

      <section className="py-section">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 90}>
                <article className="flex h-full flex-col">
                  <Link
                    href={`/services/${service.slug}`}
                    tabIndex={-1}
                    aria-hidden="true"
                    className="block"
                  >
                    <div className="img-frame aspect-editorial w-full">
                      {service.image && (
                        <Image
                          src={service.image.src}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 48vw, 100vw"
                          className="img-zoom object-cover"
                        />
                      )}
                    </div>
                  </Link>

                  <h2 className="mt-7 font-display text-section font-bold text-heritage-black">
                    <Link
                      href={`/services/${service.slug}`}
                      className="transition-colors duration-micro hover:text-redemption-red"
                    >
                      {service.name}
                    </Link>
                  </h2>

                  <p className="mt-4 max-w-measure text-body-lg text-steel-gray">
                    {service.situation}
                  </p>

                  <ul className="border-heritage-black/12 mt-7 grid gap-2 border-t pt-6">
                    {service.weHandle.slice(0, 6).map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-body-base text-steel-gray"
                      >
                        <span aria-hidden="true" className="mt-0.5 text-redemption-red">
                          &#8212;
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className="link-editorial mt-8"
                  >
                    {service.shortName}
                    <span aria-hidden="true" className="btn-arrow">
                      &rarr;
                    </span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="border-heritage-black/12 mt-16 max-w-measure-lg border-t pt-8 text-body-base text-steel-gray">
              Not sure which one you need? Send photos and we&apos;ll tell you.{" "}
              <Link
                href="/how-it-works"
                className="font-semibold text-heritage-black underline decoration-redemption-red decoration-2 underline-offset-4"
              >
                See how the process works
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <CallToAction
        location="services_overview_cta"
        headline="Estimate from photos. Final quote on site."
        supportingText="Send photos for a ballpark estimate over the phone. We'll come out and give you the final quote in person."
      />
    </>
  );
}
