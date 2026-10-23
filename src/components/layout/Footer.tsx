import Link from "next/link";
import Image from "next/image";
import {
  business,
  formatEmailHref,
  formatPhoneSmsHref,
  formatPhoneTelHref,
} from "@/content/business";
import { legalNav, secondaryNav } from "@/content/navigation";
import { services } from "@/content/services";
import { approvedServiceAreas } from "@/content/serviceAreas";

/**
 * Substantial footer: brand block with positioning statement, full service
 * and audience indexes for crawlable internal linking, service areas,
 * contact, and legal. Honors publicAddressEnabled — never renders the street
 * address while it is false.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark border-t-4 border-redemption-red bg-heritage-black text-clean-white">
      <div className="container-page grid gap-x-10 gap-y-12 py-16 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Image
            src="/images/brand/logo-header@4x.png"
            alt={business.name}
            width={466}
            height={192}
            className="h-16 w-auto"
          />
          {/* White, not red: the brand guide forbids red type on dark
              backgrounds, and it fails contrast there. */}
          <p className="mt-6 max-w-measure border-l-2 border-redemption-red pl-4 font-condensed text-base uppercase tracking-wide text-clean-white">
            {business.legalTagline}
          </p>
          <p className="mt-5 max-w-measure text-sm leading-relaxed text-clean-white/65">
            Estate cleanouts, junk removal, and demolition throughout Metro Detroit —
            real-estate informed, and built for the properties other companies pass on.
          </p>

          <dl className="mt-8 space-y-3 text-sm">
            <div>
              <dt className="eyebrow-plain">Service area</dt>
              <dd className="mt-1 text-clean-white/80">
                All of Metro Detroit — {business.serviceRegionSummary}
              </dd>
            </div>
            <div>
              <dt className="eyebrow-plain">Call or text</dt>
              <dd className="mt-1">
                <a
                  href={formatPhoneTelHref()}
                  className="font-display text-lg font-semibold transition-colors duration-micro hover:text-redemption-red"
                >
                  {business.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow-plain">Email</dt>
              <dd className="mt-1">
                <a
                  href={formatEmailHref()}
                  className="break-all text-clean-white/80 transition-colors duration-micro hover:text-redemption-red"
                >
                  {business.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow-plain">Instagram</dt>
              <dd className="mt-1">
                <a
                  href={business.instagramUrl}
                  className="text-clean-white/80 transition-colors duration-micro hover:text-redemption-red"
                >
                  {business.instagramHandle}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        {/* Services */}
        <nav aria-label="Services" className="lg:col-span-3">
          <p className="eyebrow-plain">Services</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-clean-white/70 transition-colors duration-micro hover:text-redemption-red"
                >
                  {service.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Areas + more */}
        <div className="lg:col-span-5">
          <nav aria-label="Service areas">
            <p className="eyebrow-plain">Service Areas</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {approvedServiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="text-clean-white/70 transition-colors duration-micro hover:text-redemption-red"
                  >
                    {area.countyName} County
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="text-clean-white/70 transition-colors duration-micro hover:text-redemption-red"
                >
                  All areas
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="More" className="mt-9">
            <p className="eyebrow-plain">More</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-clean-white/70 transition-colors duration-micro hover:text-redemption-red"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-clean-white/70 transition-colors duration-micro hover:text-redemption-red"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-clean-white/70 transition-colors duration-micro hover:text-redemption-red"
                >
                  Before &amp; After
                </Link>
              </li>
              {secondaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-clean-white/70 transition-colors duration-micro hover:text-redemption-red"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-clean-white/12">
        <div className="container-page flex flex-col gap-4 py-7 text-xs text-clean-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors duration-micro hover:text-clean-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={formatPhoneSmsHref()}
                className="transition-colors duration-micro hover:text-clean-white"
              >
                Text us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
