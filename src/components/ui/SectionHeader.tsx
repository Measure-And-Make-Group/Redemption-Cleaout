import { Reveal } from "@/components/motion/Reveal";

type SectionHeaderProps = {
  label?: string;
  title: string;
  intro?: string;
  /** Renders on a dark panel. */
  onDark?: boolean;
  /** Optional trailing element, e.g. a "view all" link. */
  action?: React.ReactNode;
  size?: "section" | "section-xl";
};

export function SectionHeader({
  label,
  title,
  intro,
  onDark = false,
  action,
  size = "section",
}: SectionHeaderProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
      <div className="max-w-measure-lg">
        {label && (
          <Reveal>
            <p className="eyebrow">{label}</p>
          </Reveal>
        )}
        <Reveal delay={80}>
          <h2
            className={`${label ? "mt-5" : ""}font-bold ${size === "section-xl" ? "text-section-xl" : "text-section"} ${
              onDark ? "text-clean-white" : "text-heritage-black"
            }`}
          >
            {title}
          </h2>
        </Reveal>
        {intro && (
          <Reveal delay={160}>
            <p
              className={`mt-6 max-w-measure text-body-lg ${
                onDark ? "text-clean-white/75" : "text-steel-gray"
              }`}
            >
              {intro}
            </p>
          </Reveal>
        )}
      </div>
      {action && (
        <Reveal delay={160} className="shrink-0">
          {action}
        </Reveal>
      )}
    </div>
  );
}
