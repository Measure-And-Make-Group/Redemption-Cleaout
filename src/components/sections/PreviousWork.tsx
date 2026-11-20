import Link from "next/link";
import Image from "next/image";
import { beforeAfterSets } from "@/content/gallery";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { BeforeAfterLabel } from "@/components/sections/BeforeAfterGallery";
import type { BeforeAfterSet } from "@/types/content";

/**
 * Home-page preview of the Before & After page: the first three matched pairs,
 * drawn from the same data as /projects so the home page never shows a photo
 * the gallery doesn't.
 */
export function PreviousWork() {
  const pairs = beforeAfterSets
    .filter(
      (set): set is Extract<BeforeAfterSet, { kind: "pair" }> => set.kind === "pair",
    )
    .slice(0, 3);
  if (pairs.length === 0) return null;

  return (
    <section className="py-section">
      <div className="container-page">
        <SectionHeader
          title="Before and after"
          action={
            <Link href="/projects" className="link-editorial">
              See all before &amp; after photos
              <span aria-hidden="true" className="btn-arrow">
                &rarr;
              </span>
            </Link>
          }
        />

        <ul className="mt-9 grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
          {pairs.map((set, index) => (
            <Reveal key={set.id} as="li" variant="mask" delay={index * 70}>
              <Link href="/projects" className="group grid grid-cols-2 gap-2">
                {[
                  { photo: set.before, label: "Before" as const },
                  { photo: set.after, label: "After" as const },
                ].map(({ photo, label }) => (
                  <span
                    key={photo.src}
                    className="img-frame relative block aspect-[4/5] w-full"
                  >
                    <Image
                      src={photo.src}
                      alt={`${label}: ${photo.alt}`}
                      fill
                      sizes="(min-width: 768px) 16vw, 50vw"
                      className="img-zoom object-cover"
                    />
                    <span aria-hidden="true" className="absolute left-2 top-2">
                      <BeforeAfterLabel label={label} />
                    </span>
                  </span>
                ))}
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
