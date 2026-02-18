import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Light gray background variant */
  variant?: "white" | "gray";
}

/** Page section wrapper with consistent vertical padding */
export function Section({
  children,
  className = "",
  id,
  variant = "white",
}: SectionProps) {
  const bg = variant === "gray" ? "bg-slate-50" : "bg-white";

  return (
    <section id={id} className={`py-16 md:py-20 lg:py-24 ${bg} ${className}`}>
      {children}
    </section>
  );
}
