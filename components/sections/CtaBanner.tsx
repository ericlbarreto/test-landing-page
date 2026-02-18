"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

interface CtaBannerProps {
  onGetDemo: () => void;
}

/** Full-width CTA banner with industrial background */
export function CtaBanner({ onGetDemo }: CtaBannerProps) {
  const t = useTranslations("ctaBanner");

  return (
    <section className="relative overflow-hidden">
      {/* Background split */}
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div
          className="hidden lg:block w-1/2 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://tractian.com/images/who-we-serve/plant-manager/plant-manager-cta.webp)",
          }}
        >
          <div className="h-full w-full bg-slate-900/30" />
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2">
            {t("title")}
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            {t("titleLine2")}
          </h2>
          <Button variant="white" size="lg" onClick={onGetDemo}>
            {t("cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
