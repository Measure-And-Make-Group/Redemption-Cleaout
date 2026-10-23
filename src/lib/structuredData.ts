import { business, siteUrl } from "@/content/business";
import { serviceAreas } from "@/content/serviceAreas";
import { absoluteUrl } from "@/lib/seo";
import type { ServiceDefinition, ServiceFAQ } from "@/types/content";

/**
 * Counties as AdministrativeArea nodes rather than one prose string. Google
 * reads the structured form for local coverage; the prose summary is still
 * used in visible copy.
 */
function areaServedNodes() {
  return serviceAreas.map((area) => ({
    "@type": "AdministrativeArea",
    name: `${area.countyName} County`,
    containedInPlace: {
      "@type": "State",
      name: "Michigan",
    },
  }));
}

/**
 * LocalBusiness JSON-LD. Per the address safety rule, the street address is
 * omitted entirely while business.address.publicAddressEnabled is false —
 * never include it "for completeness" or as an approximate value.
 */
export function organizationJsonLd() {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    url: siteUrl,
    telephone: business.phoneDisplay,
    email: business.email,
    slogan: business.legalTagline,
    description: `Full property cleanouts and demolition throughout Metro Detroit — ${business.serviceRegionSummary}.`,
    areaServed: areaServedNodes(),
    sameAs: [business.instagramUrl],
  };

  if (business.address.publicAddressEnabled) {
    base.address = {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: "US",
    };
  } else {
    base.address = {
      "@type": "PostalAddress",
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      addressCountry: "US",
    };
  }

  return base;
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    url: siteUrl,
  };
}

export function webPageJsonLd(name: string, path: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(path),
  };
}

export function serviceJsonLd(service: ServiceDefinition) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phoneDisplay,
    },
    areaServed: areaServedNodes(),
    url: absoluteUrl(`/services/${service.slug}`),
  };
}

/**
 * Service schema for a city page, with areaServed narrowed to that city. The
 * site-wide county list is the wrong signal here — the point of a city page is
 * that it is about one place.
 */
export function cityServiceJsonLd(cityName: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Property Cleanouts and Demolition",
    name: `Property Cleanouts and Demolition in ${cityName}, MI`,
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phoneDisplay,
      url: siteUrl,
    },
    areaServed: {
      "@type": "City",
      name: cityName,
      containedInPlace: { "@type": "State", name: "Michigan" },
    },
    url: absoluteUrl(path),
  };
}

export function faqPageJsonLd(faqs: ServiceFAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleJsonLd(title: string, description: string, path: string, publishedAt: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    datePublished: publishedAt,
    author: { "@type": "Organization", name: business.name },
  };
}
