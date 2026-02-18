"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

/** "Why Plant Managers Choose Tractian" section with accordion items */
export function WhyChoose() {
  const t = useTranslations("whyChoose");
  const [activeIndex, setActiveIndex] = useState(1);

  // Get items from translations
  const items = [0, 1, 2, 3].map((i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
  }));

  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text + accordion */}
          <div>
            <p className="mb-3 text-xs md:text-sm font-semibold tracking-[0.15em] text-primary uppercase">
              {t("eyebrow")}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              {t("title")}
            </h2>

            <div className="space-y-1">
              {items.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <div key={index} className="border-l-4 border-transparent">
                    <button
                      onClick={() => setActiveIndex(isActive ? -1 : index)}
                      className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-all ${
                        isActive
                          ? "border-l-4 border-primary bg-white"
                          : "hover:bg-slate-50"
                      }`}
                      aria-expanded={isActive}
                    >
                      {/* Checkbox icon */}
                      <div
                        className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded ${
                          isActive
                            ? "bg-primary text-white"
                            : "border-2 border-slate-300"
                        }`}
                      >
                        {isActive && (
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <span
                        className={`text-sm md:text-base font-semibold ${
                          isActive ? "text-slate-900" : "text-slate-400"
                        }`}
                      >
                        {item.title}
                      </span>
                    </button>

                    {/* Expandable description */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isActive ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="px-4 pb-4 pl-12 text-sm text-slate-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: image placeholder */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://tractian.com/images/who-we-serve/plant-manager/plant-manager-why-choose.webp"
                alt="Industrial equipment with Tractian monitoring"
                className="w-full h-auto rounded-2xl"
                loading="lazy"
              />
            </div>

            {/* Floating status cards */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <div className="rounded-xl bg-white px-3 py-2 shadow-lg text-center">
                <div className="flex items-center gap-1 mb-0.5">
                  <div className="h-4 w-4 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="h-2.5 w-2.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-slate-700">Lubrication</span>
                </div>
                <div className="flex gap-0.5 mb-0.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-1 w-3 rounded-full bg-green-400" />
                  ))}
                  <div className="h-1 w-3 rounded-full bg-slate-200" />
                </div>
                <span className="text-[10px] text-green-500 font-medium">Satisfactory</span>
              </div>

              <div className="rounded-xl bg-white px-3 py-2 shadow-lg text-center">
                <div className="flex items-center gap-1 mb-0.5">
                  <div className="h-4 w-4 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="text-amber-500 text-[8px]">⚠</span>
                  </div>
                  <span className="text-xs font-medium text-slate-700">Vibration</span>
                </div>
                <div className="flex gap-0.5 mb-0.5">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-1 w-3 rounded-full bg-amber-400" />
                  ))}
                  {[1, 2].map((i) => (
                    <div key={i} className="h-1 w-3 rounded-full bg-slate-200" />
                  ))}
                </div>
                <span className="text-[10px] text-amber-500 font-medium">Unsatisfactory</span>
              </div>

              <div className="rounded-xl bg-white px-3 py-2 shadow-lg text-center">
                <div className="flex items-center gap-1 mb-0.5">
                  <div className="h-4 w-4 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="text-amber-500 text-[8px]">⚠</span>
                  </div>
                  <span className="text-xs font-medium text-slate-700">Cavitation</span>
                </div>
                <div className="flex gap-0.5 mb-0.5">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-1 w-3 rounded-full bg-amber-400" />
                  ))}
                  {[1, 2].map((i) => (
                    <div key={i} className="h-1 w-3 rounded-full bg-slate-200" />
                  ))}
                </div>
                <span className="text-[10px] text-amber-500 font-medium">Unsatisfactory</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
