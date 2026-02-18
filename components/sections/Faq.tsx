"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

/** Single FAQ accordion item */
function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span
          className={`text-sm md:text-base font-medium ${
            isOpen ? "text-primary" : "text-slate-700"
          }`}
        >
          {question}
        </span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-4 text-sm text-slate-500 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

/** FAQ accordion section */
export function Faq() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState(0);

  // 17 FAQ items
  const items = Array.from({ length: 17 }, (_, i) => ({
    question: t(`items.${i}.question`),
    answer: t(`items.${i}.answer`),
  }));

  return (
    <Section>
      <Container className="max-w-3xl">
        <p className="text-center text-sm font-semibold tracking-[0.15em] text-primary uppercase mb-3">
          {t("eyebrow")}
        </p>
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-10 md:mb-14">
          {t("title")}
        </h2>

        <div className="space-y-3">
          {items.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
