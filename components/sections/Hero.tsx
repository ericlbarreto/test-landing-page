"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  onGetDemo: () => void;
}

/** Hero section with headline, CTA, and testimonial overlay */
export function Hero({ onGetDemo }: HeroProps) {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden">
      {/* Background: split layout */}
      <div className="absolute inset-0 flex">
        {/* Left: dark blue overlay */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        {/* Right: image */}
        <div
          className="hidden lg:block w-1/2 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://tractian.com/images/who-we-serve/plant-manager/hero-plant-manager.webp)",
          }}
        >
          {/* Dark overlay for image */}
          <div className="h-full w-full bg-slate-900/20" />
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 min-h-[560px] md:min-h-[600px] items-center py-16 md:py-20 lg:py-24">
          {/* Left column: text content */}
          <div className="text-white">
            <p className="mb-4 text-xs md:text-sm font-semibold tracking-[0.15em] text-slate-300 uppercase">
              {t("eyebrow")}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {t("title")}
            </h1>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 max-w-lg">
              {t("description")}
            </p>
            <Button
              variant="primary"
              size="lg"
              withArrow
              onClick={onGetDemo}
            >
              {t("cta")}
            </Button>
          </div>

          {/* Right column: testimonial card (visible on lg+) */}
          <div className="hidden lg:flex justify-end items-end">
            <div className="bg-white rounded-xl p-6 shadow-xl max-w-sm">
              <p className="text-sm text-slate-600 leading-relaxed mb-4 italic">
                &ldquo;{t("testimonial.quote")}&rdquo;
              </p>
              <div>
                <p className="text-sm font-bold text-primary">
                  {t("testimonial.name")}
                </p>
                <p className="text-xs text-slate-500">
                  {t("testimonial.role")}
                </p>
                <p className="text-xs font-semibold text-slate-700">
                  {t("testimonial.company")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
