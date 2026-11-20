import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export function WhyRedemption() {
  return (
    <section className="py-section">
      <div className="container-page grid items-center gap-9 lg:grid-cols-2 lg:gap-14">
        <Reveal variant="mask" className="img-frame aspect-editorial w-full">
          <Image
            src="/images/photos/about-team-at-trailer.jpg"
            alt="The Redemption crew standing together by their trailer."
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal>
          <h2 className="text-section font-bold text-heritage-black">
            A local crew that understands property deadlines
          </h2>
          <p className="mt-5 max-w-measure text-body-lg text-steel-gray">
            Dante brings 13 years of real-estate experience to Redemption. Tell us when
            you need the property ready for a sale, renovation, or turnover. We’ll use
            that date to plan the job with you at the walkthrough.
          </p>
          <Link href="/about" className="link-editorial mt-6">
            Meet Dante, Laura, and the crew
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
