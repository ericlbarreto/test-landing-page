"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

/** Testimonial quote icon */
function QuoteIcon() {
  return (
    <svg
      className="h-8 w-8 text-primary"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  );
}

/** Avatars for testimonials - simple colored circles with initials */
function Avatar({ name, index }: { name: string; index: number }) {
  const colors = [
    "bg-blue-100 text-blue-600",
    "bg-green-100 text-green-600",
    "bg-amber-100 text-amber-600",
    "bg-purple-100 text-purple-600",
  ];
  const initials = name.split(" ").map((n) => n[0]).join("");

  return (
    <div
      className={`flex h-11 w-11 items-center justify-center rounded-full ${colors[index % 4]} text-sm font-bold flex-shrink-0`}
    >
      {initials}
    </div>
  );
}

/** Testimonials section with horizontal scroll on mobile */
export function Testimonials() {
  const t = useTranslations("testimonials");

  const items = [0, 1, 2, 3].map((i) => ({
    quote: t(`items.${i}.quote`),
    name: t(`items.${i}.name`),
    role: t(`items.${i}.role`),
    company: t(`items.${i}.company`),
  }));

  return (
    <Section variant="gray">
      <Container>
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-12">
          {t("title")}
        </h2>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0">
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] snap-start rounded-xl bg-white p-6 shadow-sm flex flex-col md:min-w-0"
            >
              <QuoteIcon />
              <p className="mt-4 flex-1 text-sm text-slate-500 leading-relaxed italic">
                {item.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar name={item.name} index={index} />
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                  <p className="text-xs font-semibold text-slate-700">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
