import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  /**
   * "dark" — solid heritage-black panel, the default interior treatment.
   * "image" — photography with a scrim, for pages that have a real photo.
   * "light" — warm-concrete panel, for legal and utility pages so they don't
   *           all open with the same black slab.
   */
  variant?: "dark" | "image" | "light";
  image?: { src: string; alt: string };
  /** Optional supporting element, e.g. inline CTAs. */
  children?: React.ReactNode;
};

/**
 * Small family of editorial hero layouts shared by every interior route, so
 * pages stay consistent without every one opening identically.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  variant = "dark",
  image,
  children,
}: PageHeroProps) {
  const useImage = variant === "image" && image;
  const light = variant === "light";

  return (
    <section
      className={`relative isolate overflow-hidden ${
        light
          ? "border-b border-heritage-black/10 bg-warm-concrete text-heritage-black"
          : "on-dark bg-heritage-black text-clean-white"
      }`}
    >
      {useImage && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={image.src}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(11,13,14,0.95) 0%, rgba(11,13,14,0.82) 55%, rgba(11,13,14,0.55) 100%)",
            }}
          />
        </div>
      )}

      {!light && (
        <div
          aria-hidden="true"
          className="texture-concrete absolute inset-0 -z-10 opacity-60"
        />
      )}

      <div className="container-page py-[clamp(3.5rem,7vw,6.5rem)]">
        <div className="max-w-4xl">
          {eyebrow && (
            <Reveal>
              <p className="eyebrow">{eyebrow}</p>
            </Reveal>
          )}
          <Reveal delay={90}>
            <h1 className={`${eyebrow ? "mt-5" : ""}text-section-xl font-bold`}>
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={170}>
              <p
                className={`mt-7 max-w-measure-lg text-body-lg ${
                  light ? "text-steel-gray" : "text-clean-white/78"
                }`}
              >
                {description}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={240}>
              <div className="mt-9">{children}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
