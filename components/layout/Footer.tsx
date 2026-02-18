"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { TractianLogo } from "@/components/ui/TractianLogo";

/** Footer link column */
function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-slate-900 mb-3">{title}</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-xs text-slate-500 hover:text-primary transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Site footer with navigation columns */
export function Footer() {
  const t = useTranslations("footer");

  // Helper to get links array from translations
  const getLinks = (section: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => t(`${section}.links.${i}`));

  const columns = [
    {
      title: t("conditionMonitoring.title"),
      links: getLinks("conditionMonitoring", 5),
    },
    { title: t("oee.title"), links: getLinks("oee", 5) },
    { title: t("cmms.title"), links: getLinks("cmms", 5) },
    { title: t("pricing.title"), links: getLinks("pricing", 3) },
    { title: t("integrations.title"), links: getLinks("integrations", 4) },
    { title: t("resources.title"), links: getLinks("resources", 8) },
    { title: t("support.title"), links: getLinks("support", 7) },
    { title: t("download.title"), links: getLinks("download", 3) },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white pt-12 pb-8">
      <Container>
        {/* Top: logo + badges */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
          <TractianLogo className="h-5 text-slate-900" />
          {/* Certification badges placeholder */}
          <div className="flex flex-wrap gap-3">
            {["SOC", "Forbes AI50", "AICPA SOC", "SAP", "ISO 27001"].map(
              (badge) => (
                <span
                  key={badge}
                  className="rounded border border-slate-200 px-2 py-1 text-[10px] font-medium text-slate-400"
                >
                  {badge}
                </span>
              )
            )}
          </div>
        </div>

        {/* Columns grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {columns.map((col) => (
            <FooterColumn key={col.title} title={col.title} links={col.links} />
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-slate-200 pt-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-slate-400">{t("privacy")}</span>
            <span className="text-xs text-slate-400">{t("copyright")}</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Social icons */}
            {["LinkedIn", "Facebook", "Instagram", "YouTube", "X"].map(
              (social) => (
                <a
                  key={social}
                  href="#"
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label={social}
                >
                  <div className="h-5 w-5 rounded bg-slate-200 flex items-center justify-center">
                    <span className="text-[8px] font-bold">
                      {social[0]}
                    </span>
                  </div>
                </a>
              )
            )}
            <span className="text-xs text-slate-400 ml-2">{t("phone")}</span>
          </div>
        </div>
        <p className="mt-2 text-xs text-slate-400 text-right">{t("address")}</p>
      </Container>
    </footer>
  );
}
