"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { gaMeasurementId, gtmContainerId } from "@/content/business";

const CONSENT_KEY = "redemption-consent";

export function Analytics() {
  const [consentGranted, setConsentGranted] = useState(false);

  useEffect(() => {
    try {
      // localStorage isn't available during SSR, so consent must be read
      // after mount rather than in a lazy useState initializer.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setConsentGranted(window.localStorage.getItem(CONSENT_KEY) === "granted");
    } catch {
      setConsentGranted(false);
    }

    function handleConsentChange() {
      try {
        setConsentGranted(window.localStorage.getItem(CONSENT_KEY) === "granted");
      } catch {
        setConsentGranted(false);
      }
    }

    window.addEventListener("redemption-consent-change", handleConsentChange);
    return () => window.removeEventListener("redemption-consent-change", handleConsentChange);
  }, []);

  if (!consentGranted) {
    return null;
  }

  return (
    <>
      {gtmContainerId && (
        // Google's standard container snippet, injected only after consent like
        // the GA4 tag below. The <noscript> iframe from Google's install
        // instructions is deliberately omitted: it only runs for visitors with
        // JavaScript off, who can never have accepted the consent banner.
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmContainerId}');`}
        </Script>
      )}
      {gaMeasurementId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}
    </>
  );
}
