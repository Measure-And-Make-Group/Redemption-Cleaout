"use client";

const CONSENT_KEY = "redemption-consent";

/**
 * Analytics consent prompt.
 *
 * Visibility is CSS-driven, not state-driven: this markup is always server-
 * rendered, and `.consent-banner` is `display: none` until ConsentGate's
 * pre-paint script adds `html.consent-pending` for a visitor who has not
 * answered yet. See ConsentGate for why — briefly, gating existence on a
 * post-hydration localStorage read made this the mobile LCP element.
 *
 * Answering removes the class, which hides the banner immediately without
 * waiting on a React re-render.
 */
export function ConsentBanner() {
  function setConsent(value: "granted" | "denied") {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
      window.dispatchEvent(new Event("redemption-consent-change"));
    } catch {
      // localStorage unavailable — proceed without persisting the choice.
      // The banner still dismisses, so the visitor is not stuck with it.
    }
    document.documentElement.classList.remove("consent-pending");
  }

  return (
    /*
     * A card on mobile too, rather than full-bleed — it was already a
     * `max-w-sm` card at `sm:`. It also clears MobileActionBar (76px) instead
     * of sitting on top of it, so the Call / Text / Walkthrough actions stay
     * reachable while consent is pending.
     */
    <div
      role="region"
      aria-label="Cookie consent"
      className="consent-banner fixed inset-x-3 bottom-[88px] z-50 max-w-sm rounded border border-warm-concrete bg-clean-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.14)] sm:bottom-4 sm:left-4 sm:right-auto"
    >
      <p className="text-sm text-heritage-black">
        We use analytics to understand how visitors use this site. We don&apos;t collect
        form contents, names, phone numbers, or emails in analytics.
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => setConsent("granted")}
          className="btn-primary flex-1 !py-2 text-xs"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => setConsent("denied")}
          className="btn-secondary flex-1 !py-2 text-xs"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
