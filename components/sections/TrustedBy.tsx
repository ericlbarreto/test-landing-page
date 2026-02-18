"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

/** Brand logo data - using text as fallback since CDN URLs may not be available */
const brands = [
  { name: "Georgia Aquarium", short: "Georgia Aquarium" },
  { name: "Air Liquide", short: "Air Liquide" },
  { name: "Scotts Miracle-Gro", short: "Scotts Miracle-Gro" },
  { name: "Ingredion", short: "Ingredion" },
  { name: "Kraft Heinz", short: "Kraft Heinz" },
  { name: "Whirlpool", short: "Whirlpool" },
  { name: "CSX", short: "CSX" },
  { name: "Verizon", short: "Verizon" },
  { name: "Kubota", short: "Kubota" },
  { name: "Cummins", short: "Cummins" },
  { name: "Mauser", short: "Mauser" },
  { name: "Greif", short: "GREIF" },
];

/** Trusted-by logos section */
export function TrustedBy() {
  const t = useTranslations("trustedBy");

  return (
    <Section>
      <Container>
        <p className="text-center text-sm text-slate-500 mb-10">
          {t("title")}
        </p>

        {/* Logo grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              title={brand.name}
            >
              <span className="text-sm md:text-base font-bold text-slate-400 tracking-tight whitespace-nowrap">
                {brand.short}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
