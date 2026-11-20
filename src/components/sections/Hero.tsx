import Link from "next/link";
import Image from "next/image";
import { business, formatPhoneTelHref } from "@/content/business";

export function Hero() {
  return (
    <section className="on-dark border-t-4 border-redemption-red bg-heritage-black text-clean-white">
      <div className="container-page grid items-center gap-8 pb-9 pt-10 sm:gap-12 sm:py-14 lg:grid-cols-[1fr_1fr] lg:py-16">
        <div>
          <p className="eyebrow">{business.address.publicAreaDescription}</p>
          <h1 className="mt-5 font-display text-[clamp(2.5rem,5.2vw,5.5rem)] font-bold leading-[1.02]">
            Estate cleanouts, junk removal &amp; demolition
          </h1>
          <p className="mt-5 max-w-measure text-body-lg text-clean-white/80">
            From a garage full of junk to an entire estate, we clear what you need removed
            and haul it away. Send photos for a free estimate.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/request-walkthrough" className="btn-primary">
              Get a Free Estimate
            </Link>
            <a href={formatPhoneTelHref()} className="btn-on-dark">
              Call {business.phoneDisplay}
            </a>
          </div>
          <p className="mt-6 border-t border-clean-white/20 pt-4 text-body-base text-clean-white/75">
            {business.legalTagline}
          </p>
        </div>
        <div className="img-frame aspect-[3/2] w-full lg:aspect-[5/4]">
          <Image
            src="/images/photos/branded-truck-and-dump-trailer-residential-drive.jpg"
            alt="Redemption’s truck and dump trailer onsite at a Metro Detroit home."
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
