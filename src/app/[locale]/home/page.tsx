"use client";

import { HeroSection } from "@/components/Hero";
import { Card } from "@/components/ui/Card";
import { Globe, ShieldCheck, Cpu } from "lucide-react";
import { useTranslations } from "next-intl";
import Testimonials from "@/components/Testimonial";
import { CalendlyPopup } from "@/components/ui/CalendlyPopup";
import { EmailSignup } from "@/components/EmailSignup";
import { getCalendlyUrl } from "@/utils/calendly";
import { useState } from "react";

type Feature = {
  title: string;
  description: string;
};

type WhyChooseUs = {
  title: string;
  features: Feature[];
};

export default function HomePage() {
  const t = useTranslations("HomePage");
  const whyChooseUs = t.raw("whyChooseUs") as WhyChooseUs;
  const [isCalendlyOpen, setCalendlyOpen] = useState(false);
  const CALENDLY_URL = getCalendlyUrl("homepage");
  const icons = [
    <Globe size={32} key="globe" />,
    <ShieldCheck size={32} key="shield" />,
    <Cpu size={32} key="cpu" />,
  ];

  return (
    <main>
      <HeroSection onCallButtonClick={() => setCalendlyOpen(true)} />

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2E2E2E]">
              {whyChooseUs.title}
            </h2>
            <div className="w-20 h-1 bg-[#7FC242] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {whyChooseUs.features.map((feature, index) => (
              <Card
                key={index}
                icon={icons[index]}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Standalone Email Signup */}
      <EmailSignup
        variant="standalone"
        title={t("leadMagnet.title")}
        buttonText={t("leadMagnet.title")}
        subtitle={t("leadMagnet.subtitle")}
      />

      <CalendlyPopup
        url={CALENDLY_URL}
        isOpen={isCalendlyOpen}
        onClose={() => setCalendlyOpen(false)}
      />
    </main>
  );
}
