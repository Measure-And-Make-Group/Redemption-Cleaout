import type { ProcessStep } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Connected process timeline. A single continuous rule runs behind the steps
 * (horizontal on desktop, vertical on mobile) so the sequence reads as one
 * forward movement rather than a row of separate columns.
 */
export function ProcessTimeline({
  steps,
  onDark = false,
}: {
  steps: ProcessStep[];
  onDark?: boolean;
}) {
  const line = onDark ? "bg-clean-white/15" : "bg-heritage-black/12";
  // Ghost numerals, but not below the 3:1 large-text contrast floor — they are
  // aria-hidden and still have to be readable to sighted users (axe flags
  // aria-hidden text for contrast, correctly).
  const numeral = onDark ? "text-clean-white/55" : "text-heritage-black/55";
  const heading = onDark ? "text-clean-white" : "text-heritage-black";
  const bodyText = onDark ? "text-clean-white/65" : "text-steel-gray";
  const dotRing = onDark ? "bg-heritage-black" : "bg-clean-white";

  const columns = steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-5";

  return (
    <div className="relative">
      {/* Continuous connector */}
      <span
        aria-hidden="true"
        className={`absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px lg:left-0 lg:top-[7px] lg:h-px lg:w-full ${line}`}
      />

      {/* The ol is the grid itself, so it directly contains only li elements. */}
      <ol className={`grid gap-y-10 md:gap-x-8 ${columns}`}>
        {steps.map((step, index) => (
          <Reveal
            key={step.title}
            delay={index * 100}
            as="li"
            className="relative pl-9 lg:pl-0 lg:pt-9"
          >
            {/* Node */}
            <span
              aria-hidden="true"
              className={`absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full lg:top-0 ${dotRing}`}
            >
              <span className="h-[9px] w-[9px] rounded-full bg-redemption-red" />
            </span>

            <span
              aria-hidden="true"
              className={`block font-display text-2xl font-bold tabular-nums leading-none ${numeral}`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className={`mt-2.5 font-display text-lg font-semibold ${heading}`}>
              {step.title}
            </h3>
            <p className={`mt-2.5 text-sm leading-relaxed ${bodyText}`}>
              {step.description}
            </p>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
