"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

/** "From first call to full rollout" steps section */
export function HowItWorks() {
  const t = useTranslations("howItWorks");

  const steps = [0, 1, 2, 3].map((i) => ({
    title: t(`steps.${i}.title`),
    description: t(`steps.${i}.description`),
  }));

  return (
    <Section variant="gray">
      <Container>
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-12 md:mb-16">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step number badge */}
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold">
                {index + 1}
              </div>

              <h3 className="mb-3 text-lg font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
