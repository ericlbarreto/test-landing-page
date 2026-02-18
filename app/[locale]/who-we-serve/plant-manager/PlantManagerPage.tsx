"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { ValueProps } from "@/components/sections/ValueProps";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Faq } from "@/components/sections/Faq";
import { DemoForm } from "@/components/sections/DemoForm";

/**
 * Client-side page component that manages the demo modal state
 * and renders all sections in the correct order.
 */
export function PlantManagerPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <>
      <Header onGetDemo={openDemo} />

      <main>
        <Hero onGetDemo={openDemo} />
        <WhyChoose />
        <Features />
        <ValueProps />
        <Testimonials />
        <TrustedBy />
        <HowItWorks />
        <CtaBanner onGetDemo={openDemo} />
        <Faq />
      </main>

      <Footer />

      {/* Demo request modal */}
      <DemoForm isOpen={isDemoOpen} onClose={closeDemo} />
    </>
  );
}
