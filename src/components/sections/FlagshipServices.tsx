import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const homeServices = [
  {
    name: "Estate Cleanouts",
    href: "/services/full-property-cleanouts",
    linkLabel: "Explore estate cleanouts",
    image: "/images/photos/estate-cleanout-driveway-staging.jpg",
    description:
      "Clear an inherited home with care. We set aside the belongings you want to keep and coordinate with executors and estate-sale teams.",
  },
  {
    name: "Junk Removal",
    href: "/services/full-property-cleanouts",
    linkLabel: "Explore junk removal",
    image: "/images/photos/garage-cleanout-in-progress.jpg",
    description:
      "Clear a garage, basement, or attic, or arrange a pickup for furniture and appliances.",
  },
  {
    name: "Demolition",
    href: "/services/demolition",
    linkLabel: "Explore demolition",
    image: "/images/photos/demolition-teardown-after-04.jpg",
    description:
      "From interior tear-outs to garages, decks, sheds, and larger structures. The same crew hauls away the debris.",
  },
];

export function FlagshipServices() {
  return (
    <section className="on-dark bg-heritage-black py-section text-clean-white">
      <div className="container-page">
        <SectionHeader
          title="What we clear"
          intro="Residential and commercial, anywhere in Metro Detroit."
          onDark
        />

        <div className="mt-9 grid gap-x-8 gap-y-9 md:grid-cols-3">
          {homeServices.map((service, index) => (
            <Reveal key={service.name} delay={index * 90} className="h-full">
              <article className="flex h-full flex-col border-b border-clean-white/20 pb-6">
                <div>
                  <div className="img-frame aspect-editorial w-full">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 32vw, 100vw"
                      className="img-zoom object-cover"
                    />
                  </div>
                </div>

                <h3 className="mt-7 font-display text-subhead font-semibold">
                  {service.name}
                </h3>

                <p className="mt-4 max-w-measure text-body-base text-clean-white/70">
                  {service.description}
                </p>

                <Link href={service.href} className="link-editorial mt-auto pt-5">
                  {service.linkLabel}
                  <span aria-hidden="true" className="btn-arrow">
                    &rarr;
                  </span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
