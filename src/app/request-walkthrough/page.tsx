import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JobberRequestForm } from "@/components/JobberRequestForm";
import { StructuredData } from "@/components/StructuredData";
import { Reveal } from "@/components/motion/Reveal";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import {
  business,
  formatEmailHref,
  formatPhoneSmsHref,
  formatPhoneTelHref,
  jobberEmbedUrl,
} from "@/content/business";

export const metadata: Metadata = pageMetadata({
  title: "Get a Free Estimate",
  description:
    "Get a free cleanout or demolition estimate from Redemption Cleanout Services — send photos for a ballpark over the phone, or call or text (248) 321-9609 directly. All of Metro Detroit.",
  path: "/request-walkthrough",
});

// The online form only counts as a step once Jobber is connected; until then
// the details come in by phone or text, and the page must not imply otherwise.
const formConnected = Boolean(jobberEmbedUrl);

const steps = [
  {
    title: formConnected
      ? "You send the property details"
      : "You call or text us the details",
    body: "The address, the property type, and roughly what needs to be cleared or taken down.",
  },
  {
    title: "You send us photos",
    body: `Text them to ${business.phoneDisplay} or email ${business.email} — rooms, the garage, the basement, or the structure coming down. The more we can see, the tighter the estimate.`,
  },
  {
    title: "You get a ballpark estimate by phone",
    body: "Usually the same day. No cost, no obligation, and enough to decide whether to go ahead.",
  },
  {
    title: "We walk the property and give the final quote",
    body: "On site, in person, in writing — before anything is booked. If part of the job needs a separately licensed specialist, we say so up front.",
  },
];

const reassurances = [
  "No obligation, and no pressure to book on the spot.",
  "Sensitive situations handled privately and without judgment.",
];

export default function RequestWalkthroughPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Get a Free Estimate", path: "/request-walkthrough" },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Get a Free Estimate", href: "/request-walkthrough" },
        ]}
      />

      <PageHero
        eyebrow="Get Started"
        title="Get a free estimate"
        description={
          formConnected
            ? "Send the property details below, then text us photos — we'll come back with a ballpark estimate over the phone. The final quote is given on site, after a walkthrough."
            : "Call or text us the property details and a few photos — we'll come back with a ballpark estimate over the phone. The final quote is given on site, after a walkthrough."
        }
      />

      <section className="py-section">
        <div className="container-page grid gap-x-14 gap-y-14 lg:grid-cols-12">
          {/* Form column */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-section font-bold text-heritage-black">Send the details</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-5 max-w-measure-lg text-body-base text-steel-gray">
                {formConnected
                  ? "Your information goes directly to our scheduling system. We don't store it on this website. "
                  : null}
                Photos are easiest by text — send them to{" "}
                <a
                  href={formatPhoneSmsHref()}
                  className="font-semibold text-heritage-black underline decoration-redemption-red decoration-2 underline-offset-4"
                >
                  {business.phoneDisplay}
                </a>{" "}
                or{" "}
                <a
                  href={formatEmailHref()}
                  className="break-all font-semibold text-heritage-black underline decoration-redemption-red decoration-2 underline-offset-4"
                >
                  {business.email}
                </a>
                {formConnected ? " once you've sent the form." : "."}
              </p>
            </Reveal>
            <Reveal delay={140} className="mt-9">
              <JobberRequestForm />
            </Reveal>
          </div>

          {/* Expectations column */}
          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <div className="border-t-2 border-redemption-red pt-7">
                <p className="eyebrow-plain text-steel-gray">What happens next</p>
                <ol className="mt-7">
                  {steps.map((step, index) => (
                    <li
                      key={step.title}
                      className="flex gap-5 border-b border-heritage-black/12 py-5 last:border-b-0"
                    >
                      <span
                        aria-hidden="true"
                        className="font-condensed text-sm font-bold tabular-nums text-redemption-red"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-base font-semibold text-heritage-black">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-steel-gray">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <ul className="mt-10 space-y-3">
                {reassurances.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-steel-gray">
                    <span aria-hidden="true" className="mt-0.5 shrink-0 text-redemption-red">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 bg-heritage-black p-8 text-clean-white on-dark">
                <p className="eyebrow-plain">Prefer to talk first?</p>
                <p className="mt-3 text-body-base text-clean-white/80">
                  Call or text {business.founderName.split(" ")[0]} directly. Most questions get
                  answered in one conversation.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a href={formatPhoneTelHref()} className="btn-primary w-full">
                    Call {business.phoneDisplay}
                  </a>
                  <a href={formatPhoneSmsHref()} className="btn-on-dark w-full">
                    Text {business.phoneDisplay}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
