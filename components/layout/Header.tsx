"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { TractianLogo } from "@/components/ui/TractianLogo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useState } from "react";

interface HeaderProps {
  onGetDemo: () => void;
}

/** Sticky top navigation bar */
export function Header({ onGetDemo }: HeaderProps) {
  const t = useTranslations("nav");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t("solutions"), hasDropdown: true },
    { label: t("whoWeServe"), hasDropdown: true },
    { label: t("resources"), hasDropdown: true },
    { label: t("company"), hasDropdown: true },
    { label: t("pricing"), hasDropdown: false },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 text-slate-900">
            <TractianLogo className="h-5 md:h-6" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.label}
                {item.hasDropdown && (
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <a
              href="#"
              className="hidden md:inline-flex text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-2 transition-colors"
            >
              {t("login")}
            </a>
            <button
              onClick={onGetDemo}
              className="hidden md:inline-flex items-center rounded-lg border-2 border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all"
            >
              {t("getDemo")}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden rounded-md p-2 text-slate-600 hover:bg-slate-100"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-slate-100 py-4" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              ))}
              <hr className="my-2 border-slate-100" />
              <a href="#" className="px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-md">
                {t("login")}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onGetDemo();
                }}
                className="mx-3 mt-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                {t("getDemo")}
              </button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
