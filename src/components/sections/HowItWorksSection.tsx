import Link from "next/link";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { SectionHeader } from "@/components/ui/SectionHeader";

const estimateSteps = [
  {
    title: "Send photos",
    description: "Text or email photos and tell us what needs to go.",
  },
  {
    title: "Get a free estimate",
    description: "We give you a preliminary price range by phone.",
  },
  {
    title: "Walk the property with us",
    description: "We confirm the scope and give you a written quote before you book.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="border-y border-heritage-black/10 bg-warm-concrete py-section">
      <div className="container-page">
        <SectionHeader
          title="How to get an estimate"
          action={
            <Link href="/how-it-works" className="link-editorial">
              See the full process
            </Link>
          }
        />
        <div className="mt-10">
          <ProcessTimeline steps={estimateSteps} />
        </div>
      </div>
    </section>
  );
}
