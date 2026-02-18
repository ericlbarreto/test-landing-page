"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

/** "Built for smarter oversight" tabs section */
export function Features() {
  const t = useTranslations("features");
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [0, 1, 2, 3].map((i) => ({
    label: t(`tabs.${i}.label`),
    title: t(`tabs.${i}.title`),
    description: t(`tabs.${i}.description`),
    bullets: [0, 1, 2, 3, 4].map((j) => t(`tabs.${i}.bullets.${j}`)),
  }));

  const active = tabs[activeTab];

  return (
    <Section>
      <Container>
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-10 md:mb-14">
          {t("title")}
        </h2>

        {/* Tab buttons */}
        <div className="flex overflow-x-auto border-b border-slate-200 mb-10 md:mb-14 gap-0 snap-x">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-shrink-0 snap-start px-4 md:px-6 py-3 text-sm md:text-base font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === index
                  ? "border-primary text-slate-900"
                  : "border-transparent text-slate-400 hover:text-slate-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: text */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              {active.title}
            </h3>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-6">
              {active.description}
            </p>

            <ul className="space-y-3">
              {active.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                  <span className="text-sm text-slate-600">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: image placeholder */}
          <div className="bg-slate-100 rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
            <div className="text-center">
              {/* Dashboard mockup */}
              <div className="bg-white rounded-xl shadow-sm p-4 max-w-sm mx-auto">
                <div className="flex gap-2 mb-3">
                  {["181h", "84h", "46.41%", "64h", "76.19%"].map((val, i) => (
                    <div key={i} className="text-center flex-1">
                      <div className="text-xs md:text-sm font-bold text-slate-700">{val}</div>
                      <div className="h-0.5 w-full bg-primary/20 rounded-full mt-1" />
                    </div>
                  ))}
                </div>
                {/* Chart bars */}
                <div className="flex items-end gap-1 h-24 mt-4">
                  {[60, 45, 80, 35, 70, 50, 90, 40, 65, 55].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary/30 rounded-t"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
