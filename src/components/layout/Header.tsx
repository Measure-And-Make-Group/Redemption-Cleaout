"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { primaryNav, secondaryNav } from "@/content/navigation";
import { business, formatPhoneSmsHref, formatPhoneTelHref } from "@/content/business";
import { trackEvent } from "@/lib/analytics";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const mobileToggleRef = useRef<HTMLButtonElement | null>(null);
  const servicesToggleRef = useRef<HTMLButtonElement | null>(null);

  // Close menus on route change. Deriving this during render isn't possible —
  // the menus are user-controlled state that a navigation must reset — so this
  // syncs open state to the external router value.
  // React's documented "adjust state when a prop changes" pattern — state,
  // not a ref, so it's allowed during render and re-renders immediately.
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMobileOpen(false);
    setOpenDropdown(null);
  }

  // Lock body scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Escape closes either menu; focus returns to the toggle for the panel.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (openDropdown) {
        setOpenDropdown(null);
        servicesToggleRef.current?.focus();
      }
      if (mobileOpen) {
        setMobileOpen(false);
        mobileToggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openDropdown, mobileOpen]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-heritage-black/10 bg-clean-white text-heritage-black">
        <div className="container-page flex h-[76px] items-center justify-between gap-6 lg:h-[88px]">
          <Link href="/" className="shrink-0" aria-label={`${business.name} — home`}>
            <Image
              src="/images/brand/logo-header@4x.png"
              alt={business.name}
              width={466}
              height={192}
              priority
              className="h-11 w-auto lg:h-14"
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-4 xl:gap-7">
              {primaryNav.map((item) => {
                const active = isActive(item.href);
                const open = openDropdown === item.label;

                if (!item.children) {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={`relative py-2 font-condensed text-sm font-bold uppercase tracking-[0.12em] transition-colors duration-micro after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:bg-redemption-red after:transition-all after:duration-micro after:ease-editorial hover:text-restoration-red-dark ${
                          active ? "after:w-full" : "after:w-0 hover:after:w-full"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li
                    key={item.href}
                    className="relative"
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget))
                        setOpenDropdown(null);
                    }}
                  >
                    <button
                      type="button"
                      aria-expanded={open}
                      ref={servicesToggleRef}
                      onClick={() => setOpenDropdown(open ? null : item.label)}
                      className={`relative flex items-center gap-1.5 py-2 font-condensed text-sm font-bold uppercase tracking-[0.12em] transition-colors duration-micro after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:bg-redemption-red after:transition-all after:duration-micro after:ease-editorial hover:text-restoration-red-dark ${
                        active ? "after:w-full" : "after:w-0 hover:after:w-full"
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`text-[9px] transition-transform duration-micro ease-editorial ${
                          open ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    {open && (
                      <div className="absolute left-0 top-full w-[300px] border border-heritage-black/10 bg-clean-white pb-2 pt-1 text-heritage-black shadow-panel">
                        <Link
                          href={item.href}
                          className="mx-2 mt-1 block px-4 py-2.5 font-condensed text-xs font-bold uppercase tracking-[0.16em] text-restoration-red-dark transition-colors duration-micro hover:bg-warm-concrete"
                        >
                          {item.label} overview
                        </Link>
                        <span
                          aria-hidden="true"
                          className="mx-4 my-1 block h-px bg-heritage-black/10"
                        />
                        <ul>
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                aria-current={isActive(child.href) ? "page" : undefined}
                                className={`mx-2 block px-4 py-2.5 text-sm transition-colors duration-micro hover:bg-warm-concrete hover:text-restoration-red-dark ${
                                  isActive(child.href)
                                    ? "font-semibold text-restoration-red-dark"
                                    : "text-heritage-black"
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop actions */}
          <div className="hidden shrink-0 items-center gap-5 lg:flex">
            <a
              href={formatPhoneTelHref()}
              className="whitespace-nowrap font-condensed text-sm font-bold tracking-wide transition-colors duration-micro hover:text-restoration-red-dark"
              onClick={() =>
                trackEvent({ name: "click_call", params: { location: "header" } })
              }
            >
              {business.phoneDisplay}
            </a>
            <Link
              href="/request-walkthrough"
              className="btn-primary !min-h-[46px] whitespace-nowrap !px-5 !text-xs"
              onClick={() =>
                trackEvent({
                  name: "click_request_walkthrough",
                  params: { location: "header" },
                })
              }
            >
              Get a Free Estimate
              <span aria-hidden="true" className="btn-arrow">
                &rarr;
              </span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            ref={mobileToggleRef}
            className="flex h-11 w-11 shrink-0 items-center justify-center border border-heritage-black/25 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span aria-hidden="true" className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-[2px] w-full bg-current transition-all duration-standard ease-editorial ${
                  mobileOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-[2px] w-full bg-current transition-opacity duration-micro ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-full bg-current transition-all duration-standard ease-editorial ${
                  mobileOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile panel */}
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          hidden={!mobileOpen}
          className="max-h-[calc(100svh-76px)] overflow-y-auto border-t border-heritage-black/10 bg-clean-white text-heritage-black lg:hidden"
        >
          <ul className="container-page py-4">
            {primaryNav.map((item) => (
              <li key={item.href} className="border-b border-heritage-black/10">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block py-4 font-display text-lg font-semibold ${
                    isActive(item.href)
                      ? "text-restoration-red-dark"
                      : "text-heritage-black"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="pb-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block border-l border-heritage-black/15 py-2.5 pl-4 text-sm text-steel-gray"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {secondaryNav.map((item) => (
              <li key={item.href} className="border-b border-heritage-black/10">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block py-3.5 font-condensed text-base font-bold uppercase tracking-wide ${
                    isActive(item.href) ? "text-restoration-red-dark" : "text-steel-gray"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="flex flex-col gap-3 pt-6">
              <Link href="/request-walkthrough" className="btn-primary w-full">
                Get a Free Estimate
                <span aria-hidden="true" className="btn-arrow">
                  &rarr;
                </span>
              </Link>
              <div className="grid grid-cols-2 gap-3">
                <a href={formatPhoneTelHref()} className="btn-secondary">
                  Call
                </a>
                <a href={formatPhoneSmsHref()} className="btn-secondary">
                  Text
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <div aria-hidden="true" className="h-[76px] lg:h-[88px]" />
    </>
  );
}
